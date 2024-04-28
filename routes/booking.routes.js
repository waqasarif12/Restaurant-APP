/**
* call library
*/
const express = require("express")
const router = express.Router()
const Booking = require('../models/Booking')
const Customer = require('../models/Customer')
const { check, validationResult } = require('express-validator/check')
const moment = require('moment');
const bookingController = require('../controllers/booking.controller')
moment().format();

/**
* middleware
*/


/**
* route for all booking
*/
router.get('/', bookingController.all_booking)
  
/**
* route for new booking
*/
router.get('/new', bookingController.render_booking)

/**
* route for post booking
*/
router.post('/new', bookingController.new_booking)

/**
* route for single booking
*/
router.get('/single/:id', bookingController.find_booking_by_id)

/**
* route for edit booking
*/
router.get('/edit/:id', bookingController.edit_booking_by_id)

/**
* route for update booking
*/
router.post('/update', bookingController.update_booking_by_id)

/**
* route for delete booking
*/
router.post('/delete', bookingController.delete_booking_by_id)

module.exports = router