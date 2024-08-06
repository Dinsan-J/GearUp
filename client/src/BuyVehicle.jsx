import React, { useEffect, useState } from 'react';
import './BuyVehicle.css';

const BuyVehicle = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/sellform/buy');
                const data = await response.json();
                setVehicles(data);
                console.log('Fetched vehicles:', data); // Debug: Check fetched data
            } catch (error) {
                console.error('Error fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div className="buyvehicle-body">
            <h1 className="buyvehicle-h1">Available Vehicles</h1>
            <div className="vehicle-list">
                {vehicles.map(vehicle => {
                    // Debug: Check image data for each vehicle
                    console.log('Vehicle image data:', vehicle.image);
                    const imageUrl = vehicle.image ? `data:image/jpeg;base64,${vehicle.image}` : '';

                    return (
                        <div key={vehicle._id} className="vehicle-card">
                            <h2>{vehicle.make} {vehicle.model}</h2>
                            {vehicle.image ? (
                                <img
                                    src={imageUrl}
                                    alt={`${vehicle.make} ${vehicle.model}`}
                                    className="vehicle-image"
                                    onError={() => console.error('Error loading image:', imageUrl)} // Debug: Log image load errors
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                            <p>Year: {vehicle.year}</p>
                            <p>VIN: {vehicle.vin}</p>
                            <p>Mileage: {vehicle.mileage} Km</p>
                            <p>Body Type: {vehicle.bodyType}</p>
                            <p>Transmission: {vehicle.transmission}</p>
                            <p>Engine: {vehicle.engine} CC</p>
                            <p>Fuel: {vehicle.fuel}</p>
                            <p>Exterior Color: {vehicle.exteriorColor}</p>
                            <p>Interior Color: {vehicle.interiorColor}</p>
                            <p>Price: Rs.{vehicle.price}</p>
                            <p>Condition: {vehicle.condition}</p>
                            <p>Accident History: {vehicle.accidentHistory ? 'Yes' : 'No'}</p>
                            <p>Maintenance Records: {vehicle.maintenanceRecords ? 'Yes' : 'No'}</p>
                            <p>Description: {vehicle.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BuyVehicle;
