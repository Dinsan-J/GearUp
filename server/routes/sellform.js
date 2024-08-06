const express = require('express');
const router = express.Router();
const multer = require('multer');
const Vehicle = require('../models/Vehicle');
const fs = require('fs');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Route to handle form submissions
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const formData = req.body;
        const image = req.file;

        console.log('Form Data:', formData);
        console.log('Image Data:', image);

        let imageData = null;
        if (image) {
            const imgBuffer = fs.readFileSync(image.path);
            imageData = imgBuffer.toString('base64');
        }

        const newVehicle = new Vehicle({
            make: formData.make,
            model: formData.model,
            year: formData.year,
            vin: formData.vin,
            mileage: formData.mileage,
            bodyType: formData.bodyType,
            transmission: formData.transmission,
            engine: formData.engine,
            fuel: formData.fuel,
            exteriorColor: formData.exteriorColor,
            interiorColor: formData.interiorColor,
            price: formData.currency,
            email: formData.email,
            mobileNumber: formData.mobileNumber,
            address: formData.Address,
            condition: formData.condition,
            accidentHistory: formData.accidentHistory === 'true',
            maintenanceRecords: formData.maintenanceRecords === 'true',
            description: formData.description,
            image: imageData, // Store base64 string
        });

        console.log('New Vehicle Data:', newVehicle);

        await newVehicle.save();

        res.json({ message: 'Data successfully stored' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to store data' });
    }
});

// Route to fetch all vehicles
router.get('/buy', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
});

module.exports = router;
