const mongoose = require('mongoose');
const Trip = require('../../app_api/models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  const q = await Model
    .find({}) // No filter, return all records
    .exec();

  console.log(q);

  if (!q) {
    return res
      .status(404)
      .json({ message: 'No trips found' });
  } else {
    return res
      .status(200)
      .json(q);
  }
};

// GET: /trips/:tripCode - find a trip by code
const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({ 'code': req.params.tripCode }) // Return single record
    .exec();

  console.log(q);

  if (!q) {
    return res
      .status(404)
      .json({ message: 'Trip not found' });
  } else {
    return res
      .status(200)
      .json(q);
  }
};

// POST: /trips - Add a new Trip
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  const q = await newTrip.save();

  if (!q) {
    return res
      .status(400)
      .json({ message: 'Failed to create trip' });
  } else {
    return res
      .status(201) // Created
      .json(q);
  }
};

// PUT: /trips/:tripCode - Update an existing Trip
const tripsUpdateTrip = async (req, res) => {

  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    },
    { new: true, runValidators: true }
  ).exec();

  if (!q) {
    return res
      .status(400)
      .json(err);
  } else {
    return res
      .status(201)
      .json(q);
  }
};

// Export all methods
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};