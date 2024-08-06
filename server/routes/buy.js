const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// GET /api/buy - Fetch all available vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
