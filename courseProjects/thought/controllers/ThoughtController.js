const Thought = require('../models/Thoughts')
const User = require('../models/User')

module.exports = class ThoughtController {
  static async showThoughts(req, res) {
    res.render('thoughts/home')
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

    res.render('thoughts/dashboard', {thought})
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
}