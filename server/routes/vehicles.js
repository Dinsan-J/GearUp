const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle'); // Ensure this path is correct
const multer = require('multer'); // For handling file uploads

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Route to add a new vehicle
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const newVehicle = new Vehicle({
            ...req.body,
            image: req.file ? req.file.path : ''
        });
        await newVehicle.save();
        res.status(200).json({ message: 'Vehicle data saved successfully' });
    } catch (error) {
        console.error('Error saving vehicle data:', error);
        res.status(500).json({ message: 'Failed to store data', error });
    }
});

// Route to search for vehicles
router.post('/search', async (req, res) => {
    try {
        const { make, model, year, priceRange } = req.body;
        const query = {};

        if (make) query.make = make;
        if (model) query.model = model;
        if (year) query.year = year;
        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            query.price = { $gte: min, $lte: max };
        }

        const vehicles = await Vehicle.find(query);
        res.json(vehicles);
    } catch (error) {
        console.error('Error fetching filtered vehicles:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
