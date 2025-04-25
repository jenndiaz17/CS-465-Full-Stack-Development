const express = require('express'); 
const router = express.Router(); 
const { authenticateJWT } = require('../authenticateJWT');



// Import the controller
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);


  // Route to get all trips
  router
  .route('/trips')
    .get(tripsController.tripsList)
    .post(authenticateJWT, tripsController.tripsAddTrip);


  // Route to get one trip by triFindBypCode
  router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip); 

  module.exports = router;
