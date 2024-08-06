const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    vin: String,
    mileage: Number,
    bodyType: String,
    transmission: String,
    engine: String,
    fuel: String,
    exteriorColor: String,
    interiorColor: String,
    price: Number,
    email: String,
    mobileNumber: String,
    address: String,
    condition: String,
    accidentHistory: Boolean,
    maintenanceRecords: Boolean,
    image: String, 
    description: String,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
