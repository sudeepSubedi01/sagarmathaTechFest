const express = require('express')
const { registerVolunteer, loginVolunteer } = require('../controllers/volunteerControllers')

// const protect = require('../middlewares/authMiddleware')

const router = express.Router()

// router.route('/').post(registerUser).get(protect,allUsers)
router.route('/').get().post(registerVolunteer)
router.route('/login').post(loginVolunteer)

module.exports = router