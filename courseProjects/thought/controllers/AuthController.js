const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController {
  static login(req, res) {
    res.render('auth/login')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email: email } })
    if (!user) {
      req.flash('message', "User not found")
      res.render('auth/login')
      return
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)
    if (!passwordMatch) {
      req.flash('message', "Invalid Password")
      res.render('auth/login')
      return
    }

    req.session.userid = user.id
    req.flash('message', 'Welcome to your personal account!')
    req.session.save(() => {
      res.redirect('/')
    })

  }

  static register(req, res) {
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body
    if (password != confirmpassword) {
      req.flash('message', "Passwords don't match!")
      res.render('auth/register')
      return
    }

    const checkIfUserExists = await User.findOne({ where: { email: email } })
    if (checkIfUserExists) {
      req.flash('message', 'The email is already in use!')
      res.render('auth/register')
      return
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)
    const user = {
      name,
      email,
      password: hashPassword
    }
    try {
      const createdUser = await User.create(user)
      req.session.userid = createdUser.id
      req.flash('message', 'Register sucessfully created')
      req.session.save(() => {
        res.redirect('/')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('/login')
  }
}