//bringing in models
const ParkingSpot = require("../models/ParkingSpot");

// Posts a single parking spot
exports.PostParkingSpot = (req, res) => {
  ParkingSpot.findOne({spot: req.body.spot})
  .then((existingspot) => {
    if (existingspot) {
      res.status(409).render("createparkingspot", {error_msg: "Spot AlreadyExists"})
    } else {
      const parkingspot = new ParkingSpot({ 
        spot: req.body.spot, 
        owner: req.body.owner });
        
      parkingspot
        .save()
        .then(res.send("Success"))
        .catch(err => console.log(err));
    }
  })

};

// Posts multiple parking spots
exports.PostManyParkingSpots = (req, res) => {

}

// Gets a single parking
exports.GetParkingSpot = (req, res) => {
  res.send("test");
};

// Gets all parking spots
exports.GetAllParkingSpots = (req, res) => {
  ParkingSpot.find({}, (error, ParkingSpot) => {
    res.send(ParkingSpot)
  })
}

// Deletes a single parking spot
exports.DeleteParkingSpot = (req, res) => {
  
}
 
