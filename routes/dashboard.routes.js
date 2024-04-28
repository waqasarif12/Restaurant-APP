/**
* call library
*/
const express = require("express")
const router = express.Router()
const dashboardController = require('../controllers/dashboard.controller')

/**
* middleware
*/


/**
* route for dashboard
*/
router.get('/', dashboardController.render_dashboard_count)

module.exports = router