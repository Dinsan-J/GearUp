import React, { useState } from 'react';
import './Home.css';
import add from './add.png';
import buy from './buy.png';

function Home() {
    const [searchCriteria, setSearchCriteria] = useState({
        make: '',
        model: '',
        year: '',
        priceRange: ''
    });
    const [filteredVehicles, setFilteredVehicles] = useState([]);

    const handleChange = (e) => {
        setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/vehicles/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchCriteria),
            });
            const data = await response.json();
            setFilteredVehicles(data);
        } catch (error) {
            console.error('Error fetching filtered vehicles:', error);
        }
    };

    return (
        <div className="homebag">
            <div className="homebutton">
                <a href="/Sellform" className="button sell-button">
                    <img src={add} className="App-logo" alt="logo" width="80" height="80" />
                    <center>Sell Your Vehicle</center>
                </a>
                <a href="/BuyVehicle" className="button buy-button">
                    <img src={buy} className="App-logo" alt="logo" width="80" height="80" />
                    <center>Buy a Vehicle</center>
                </a>
            </div>

            <div className='ffff'>
                <div className="containerh">
                    <h2>Find The Best Vehicle For You</h2><br />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <select id="make" name="make" onChange={handleChange} value={searchCriteria.make}>
                                    <option value="">Select Make</option>
                                    {/* Add all options as shown in your form */}
                                    <option value="Tata">Tata</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nissan">Nissan</option>
                                    {/* Continue adding other options */}
                                </select>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    placeholder="Model"
                                    onChange={handleChange}
                                    value={searchCriteria.model}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    id="year"
                                    name="year"
                                    placeholder="Year"
                                    onChange={handleChange}
                                    value={searchCriteria.year}
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    id="priceRange"
                                    name="priceRange"
                                    placeholder="Price Range (min-max)"
                                    onChange={handleChange}
                                    value={searchCriteria.priceRange}
                                />
                            </div>
                            <div className="col">
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Display filtered vehicles */}
                <div className="results">
                    {filteredVehicles.length > 0 ? (
                        <ul>
                            {filteredVehicles.map(vehicle => (
                                <li key={vehicle._id}>
                                    {vehicle.make} {vehicle.model} ({vehicle.year}) - ${vehicle.price}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No vehicles found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
