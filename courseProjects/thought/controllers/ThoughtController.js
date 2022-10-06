const Thought = require('../models/Thoughts')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ThoughtController {
  static async showThoughts(req, res) {
    let search = ''

    if (req.query.search) {
      search = req.query.search
    }

    let order = 'DESC'

    if (req.query.order === 'old') {
      order = 'ASC'
    } else {
      order = 'DESC'
    }

    const thoughtData = await Thought.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` },
      },
      order: [['createdAt', order]],
    })

    const thought = thoughtData.map((results) => results.get({ plain: true }))
    let thoughtQty = thought.length

    if (thoughtQty === 0) {
      thoughtQty = false;
    }

    res.render('thoughts/home', { thought, search, thoughtQty })
  }

  static async dashboard(req, res) {
    const userId = req.session.userid

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Thought,
      plain: true
    })
    if (!user) {
      res.redirect('/login')
    }
    const thought = user.Thoughts.map((results) => results.dataValues)

    let emptyThoughts = false

    if (thought.length === 0) {
      emptyThoughts = true
    }

    res.render('thoughts/dashboard', { thought, emptyThoughts })
  }

  static createThoughts(req, res) {
    res.render('thoughts/create')
  }

  static async createThoughtsSave(req, res) {
    const thought = {
      title: req.body.title,
      UserId: req.session.userid
    }
    try {
      await Thought.create(thought)
      req.flash('message', 'Thought posted :)')
      req.session.save(() => {
        res.redirect('/thoughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async removeThoughts(req, res) {
    const id = req.body.id
    const userId = req.session.userid
    try {
      await Thought.destroy({ where: { id: id, UserId: userId } })
      req.flash('message', 'Thought removed')
      req.session.save(() => {
        res.redirect('/thoughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async updateThoughts(req, res) {
    const id = req.params.id
    const thought = await Thought.findOne({ where: { id: id }, raw: true })
    res.render('thoughts/edit', { thought })
  }

  static async updateThoughtsSave(req, res) {
    const id = req.body.id
    const thought = {
      title: req.body.title
    }
    try {
      await Thought.update(thought, { where: { id: id } })
      req.flash('message', 'Thought updated')
      req.session.save(() => {
        res.redirect('/thoughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }
}