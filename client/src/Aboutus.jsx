import React from 'react';

import './Aboutus.css'; // Importing CSS file
import mt from './mt.jpg';
import car from './car.jpg';
import truck from './truck.jpeg';
import suv from './suv.jpg';
import tw from './tw.jpeg';
import van from './van.jpeg';

const Aboutus= () => 
    (
        <div>
        <div className="box">
            <h1><b>About Us GearUp</b></h1>
            {/* <br /> */}
            <p><i>As GearUp,</i> Our Mission Is To Sell Everyone's Dream Vechile in Sri Lanka.</p>
            <br />
            <p>Live the life everyone loves.</p><br/>
        </div>
            <div className="tab2">
                <table cellSpacing="-50">
                    <tr>
                        <td>
                            <div className="tab2">
                                <img src={mt}  alt="Mullaitivu" />
                                <br />
                                <b>All Kind of Bikes</b>
                               
                            </div>
                        </td>
                        <td>
                            <div className="tab2">
                                <img src={car}  alt="Puthukkudiyiruppu" />
                                <br />
                                <b>All Kind of Cars</b>
                                
                            </div>
                        </td>
                        <td>
                            <div className="tab2">
                                <img src={truck}  alt="Oddusuddan" />
                                <br />
                                <b>All Kind of Lorries</b>
                               
                            </div>
                        </td>
                    </tr>




                    <tr>
                        <td>
                            <div className="tab2">
                                <img src={suv}  alt="Mullaitivu" />
                                <br />
                                <b>All Kind of SUVs/Jeeps</b>
                               
                            </div>
                        </td>
                        <td>
                            <div className="tab2">
                                <img src={tw}  alt="Puthukkudiyiruppu" />
                                <br />
                                <b>Three Wheels</b>
                                
                            </div>
                        </td>
                        <td>
                            <div className="tab2">
                                <img src={van}  alt="Oddusuddan" />
                                <br />
                                <b>All Kind of Vans</b>
                               
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );


export default Aboutus;
