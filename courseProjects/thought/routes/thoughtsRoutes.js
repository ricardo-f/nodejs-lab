const express = require('express')
const router = express.Router()
const ThoughtController = require('../controllers/ThoughtController')

// helper
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ThoughtController.createThoughts)
router.post('/add', checkAuth, ThoughtController.createThoughtsSave)
router.get('/dashboard', checkAuth, ThoughtController.dashboard)
router.get('/', ThoughtController.showThoughts)

module.exports = router