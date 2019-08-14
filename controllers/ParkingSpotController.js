//bringing in models
const ParkingSpot = require('../models/ParkingSpot')

exports.PostParkingSpot = (req, res) => {
    const parkingspot = new ParkingSpot ({Spot: "4B",
   Owner: "Bob"});

   
  parkingspot.save()
  .then(res.send("Success"))
  .catch(err => console.log(err));

  res.send("Der")

}

