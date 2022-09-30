const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController {
  static login(req, res) {
    res.render('auth/login')
  }

  static register(req, res) {
    res.render('auth/register')
  }
  
  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body
    if (password != confirmpassword) {
      req.flash('message', "passwords don't match!")
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
      req.session.save(()=> {
        res.redirect('/')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static logout (req,res){
    req.session.destroy()
    res.redirect('/login')
  }
}