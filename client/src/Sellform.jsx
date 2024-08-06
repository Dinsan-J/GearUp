import React, { useState } from 'react';
import './Sellform.css';

const Sellform = () => {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        vin: '',
        mileage: '',
        bodyType: 'sedan',
        transmission: 'automatic',
        engine: '',
        fuel: 'gasoline',
        exteriorColor: '',
        interiorColor: '',
        currency: '',
        email: '',
        mobileNumber: '',
        Address: '',
        condition: 'excellent',
        accidentHistory: false,
        maintenanceRecords: false,
        description: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData(e.target);
        try {
            const response = await fetch('http://localhost:5000/api/sellform', {
                method: 'POST',
                body: form
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
    
            const data = await response.json();
            alert(data.message); // Handle success message
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="sellform-body">
            <div className="sellform-container">
                <h1 className="sellform-h1">Enter Your Vehicle Details</h1>
                <form onSubmit={handleSubmit}>
                    <label className="sellform-label" htmlFor="make">Vehicle Make:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="make"
                        name="make"
                        placeholder="Enter vehicle make"
                        value={formData.make}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="model">Vehicle Model:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Enter vehicle model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="year">Year of Manufacture:</label>
                    <input
                        className="sellform-input"
                        type="number"
                        id="year"
                        name="year"
                        min="1900"
                        max="2099"
                        step="1"
                        placeholder="Select or Enter year of manufacture"
                        value={formData.year}
                        onChange={handleChange}
                    />

                    <label className="sellform-label" htmlFor="vin">VIN (Vehicle Identification Number):</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="vin"
                        name="vin"
                        placeholder="Enter Vehicle Number"
                        value={formData.vin}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="mileage">Mileage (in Km):</label>
                    <input
                        className="sellform-input"
                        type="number"
                        id="mileage"
                        name="mileage"
                        placeholder="Enter Mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="bodyType">Body Type:</label>
                    <select
                        className="sellform-input"
                        id="bodyType"
                        name="bodyType"
                        value={formData.bodyType}
                        onChange={handleChange}
                        required
                    >
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Truck</option>
                        <option value="motorbike">Motorbike</option>
                        <option value="other">Other</option>
                    </select>

                    <label className="sellform-label" htmlFor="transmission">Transmission Type:</label>
                    <select
                        className="sellform-input"
                        id="transmission"
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleChange}
                        required
                    >
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                    </select>

                    <label className="sellform-label" htmlFor="engine">Engine CC:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="engine"
                        name="engine"
                        placeholder="Enter Vehicle CC"
                        value={formData.engine}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="fuel">Fuel Type:</label>
                    <select
                        className="sellform-input"
                        id="fuel"
                        name="fuel"
                        value={formData.fuel}
                        onChange={handleChange}
                        required
                    >
                        <option value="gasoline">Patrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                    </select>

                    <label className="sellform-label" htmlFor="exteriorColor">Exterior Color:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="exteriorColor"
                        name="exteriorColor"
                        placeholder="Enter Exterior Color"
                        value={formData.exteriorColor}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="interiorColor">Interior Color:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="interiorColor"
                        name="interiorColor"
                        placeholder="Enter Interior Color"
                        value={formData.interiorColor}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="currency">Price:</label>
                    <input
                        className="sellform-input"
                        type="number"
                        id="currency"
                        name="currency"
                        step="10000"
                        min="0"
                        placeholder="Rs:0.00"
                        value={formData.currency}
                        onChange={handleChange}
                    />

                    <label className="sellform-label" htmlFor="email">Enter your mail:</label>
                    <input
                        className="sellform-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label className="sellform-label" htmlFor="mobileNumber">Mobile Number:</label>
                    <input
                        className="sellform-input"
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter your mobile number"
                        pattern="[0-9]{10}"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />

                    <label className="sellform-label" htmlFor="address">Address:</label>
                    <input
                        className="sellform-input"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />


                    <label className="sellform-label" htmlFor="condition">Condition:</label>
                    <select
                        className="sellform-input"
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                    >
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>

                    <label className="sellform-label">
                        <input
                            type="checkbox"
                            id="accidentHistory"
                            name="accidentHistory"
                            checked={formData.accidentHistory}
                            onChange={handleChange}
                        />
                        Accident History
                    </label>

                    <label className="sellform-label">
                        <input
                            type="checkbox"
                            id="maintenanceRecords"
                            name="maintenanceRecords"
                            checked={formData.maintenanceRecords}
                            onChange={handleChange}
                        />
                        Maintenance Records
                    </label>

                    <label className="sellform-label" htmlFor="description">Additional Description:</label>
                    <textarea
                        className="sellform-input"
                        id="description"
                        name="description"
                        placeholder="Enter additional details about the vehicle"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <label className="sellform-label" htmlFor="image">Upload Image:</label>
                    <input
                        className="sellform-input"
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                    />

                    <button type="submit" className="sellform-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Sellform;
