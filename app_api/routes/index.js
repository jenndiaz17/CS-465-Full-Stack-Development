const express = require('express'); // Express app
const router = express.Router();    // Router logic

// Import the controller
const tripsController = require('../controllers/trips');

// Route to get all trips
router
.route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);


// Route to get one trip by triFindBypCode
router
.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode)
.put(tripsController.tripsUpdateTrip); 

module.exports = router;
