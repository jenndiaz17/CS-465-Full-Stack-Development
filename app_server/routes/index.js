const express = require('express'); 
const router = express.Router();    

// Import the controller
const tripsController = require('../controllers/trips');

// Route to get all trips
router
  .route('/trips')
  .get(tripsController.tripsList); // GET Method routes tripList

// Route to get one trip by tripCode
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode); // GET Method with parameter

module.exports = router;
