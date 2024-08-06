// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const vehicleRoutes = require('./routes/vehicles');
const authRoutes = require('./routes/auth');
const sellformRoutes = require('./routes/sellform'); // Ensure this path is correct
const buyRoute = require('./routes/buy');


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/vehicles', vehicleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/sellform', sellformRoutes); // Ensure this path is correct
app.use('/api/buy', buyRoute);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
