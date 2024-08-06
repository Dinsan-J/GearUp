import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="container">
      <h2>Find The Best Vehicle For You</h2><br></br>
      <form action="#" method="GET">
        <div className="row">
          <div className="col">
            <select id="make" name="make">
              <option value="">Select Make</option>
              <optgroup label="Cars"></optgroup>
              <option value="Tata">Tata</option>
					    <option value="Mitsubishi">Mitsubishi</option>   
					    <option value="Nissan">Nissan</option>
					    <option value="Suzuki">Suzuki</option>
               <option value="Hyundai">Hyundai</option>
               <option value="Mercedes-Benz">Mercedes-Benz</option>
               <option value="Kia">Kia</option>
              <option value="Ford">Ford</option>
              <option value="Renault">Renault</option>
              <option value="BMW">BMW</option>


              <optgroup label="Bikes"></optgroup>
              <option value="KTM">KTM</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Bajaj">Bajaj</option>
              <option value="Hero">Hero</option>
              <option value="Hero-Honda">Hero-Honda</option>
              <option value="Honda">Honda</option>
              <option value="TVS">TVS</option>


              <optgroup label="All Makes"></optgroup>
                                            <option value="Acura">Acura</option>
                                            <option value="Alfa-Romeo">Alfa-Romeo</option>
                                            <option value="Aprilia">Aprilia</option>
                                            <option value="Ashok-Leyland">Ashok-Leyland</option>
                                            <option value="Aston">Aston</option>
                                            <option value="Atco">Atco</option>
                                            <option value="Audi">Audi</option>
                                            <option value="Austin">Austin</option>
                                            <option value="Bajaj">Bajaj</option>
                                            <option value="Bentley">Bentley</option>
                                            <option value="BMW">BMW</option>
                                            <option value="Borgward">Borgward</option>
                                            <option value="BYD">BYD</option>
                                            <option value="Cadillac">Cadillac</option>
                                            <option value="Cal">Cal</option>
                                            <option value="CAT">CAT</option>
                                            <option value="Ceygra">Ceygra</option>
                                            <option value="Changan">Changan</option>
                                            <option value="Chery">Chery</option>
                                            <option value="Chevrolet">Chevrolet</option>
                                            <option value="Chrysler">Chrysler</option>
                                            <option value="Citroen">Citroen</option>
                                            <option value="Corvette">Corvette</option>
                                            <option value="Daewoo">Daewoo</option>
                                            <option value="Daido">Daido</option>
                                            <option value="Daihatsu">Daihatsu</option>
                                            <option value="Datsun">Datsun</option>
                                            <option value="Demak">Demak</option>
                                            <option value="Dfac">Dfac</option>
                                            <option value="DFSK">DFSK</option>
                                            <option value="Ducati">Ducati</option>
                                            <option value="Dyno">Dyno</option>
                                            <option value="Eicher">Eicher</option>
                                            <option value="FAW">FAW</option>
                                            <option value="Ferrari">Ferrari</option>
                                            <option value="Fiat">Fiat</option>
                                            <option value="Force">Force</option>
                                            <option value="Ford">Ford</option>
                                            <option value="Foton">Foton</option>
                                            <option value="Hero">Hero</option>
                                            <option value="Hero-Honda">Hero-Honda</option>
                                            <option value="Higer">Higer</option>
                                            <option value="Hillman">Hillman</option>
                                            <option value="HINO">HINO</option>
                                            <option value="Hitachi">Hitachi</option>
                                            <option value="Honda">Honda</option>
                                            <option value="Hummer">Hummer</option>
                                            <option value="Hyundai">Hyundai</option>
                                            <option value="IHI">IHI</option>
                                            <option value="Isuzu">Isuzu</option>
                                            <option value="Iveco">Iveco</option>
                                            <option value="JAC">JAC</option>
                                            <option value="Jaguar">Jaguar</option>
                                            <option value="JCB">JCB</option>
                                            <option value="Jeep">Jeep</option>
                                            <option value="JiaLing">JiaLing</option>
                                            <option value="JMC">JMC</option>
                                            <option value="John-Deere">John-Deere</option>
                                            <option value="Jonway">Jonway</option>
                                            <option value="KAPLA">KAPLA</option>
                                            <option value="Kawasaki">Kawasaki</option>
                                            <option value="Kia">Kia</option>
                                            <option value="Kinetic">Kinetic</option>
                                            <option value="KMC">KMC</option>
                                            <option value="Kobelco">Kobelco</option>
                                            <option value="Komatsu">Komatsu</option>
                                            <option value="KTM">KTM</option>
                                            <option value="Kubota">Kubota</option>
                                            <option value="Lamborghini">Lamborghini</option>
                                            <option value="Land-Rover">Land-Rover</option>
                                            <option value="Lexus">Lexus</option>
                                            <option value="Loncin">Loncin</option>
                                            <option value="Longjia">Longjia</option>
                                            <option value="Lotus">Lotus</option>
                                            <option value="Lti">Lti</option>
                                            <option value="Mahindra">Mahindra</option>
                                            <option value="Maserati">Maserati</option>
                                            <option value="Massey-Ferguson">Massey-Ferguson</option>
                                            <option value="Mazda">Mazda</option>
                                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                                            <option value="Metrocab">Metrocab</option>
                                            <option value="MG">MG</option>
                                            <option value="Mg-Rover">Mg-Rover</option>
                                            <option value="Micro">Micro</option>
                                            <option value="Mini">Mini</option>
                                            <option value="Minnelli">Minnelli</option>
                                            <option value="Mitsubishi">Mitsubishi</option>
                                            <option value="Morgan">Morgan</option>
                                            <option value="Morris">Morris</option>
                                            <option value="New-Holland">New-Holland</option>
                                            <option value="Nissan">Nissan</option>
                                            <option value="NWOW">NWOW</option>
                                            <option value="Opel">Opel</option>
                                            <option value="Other">Other</option>
                                            <option value="Perodua">Perodua</option>
                                            <option value="Peugeot">Peugeot</option>
                                            <option value="Piaggio">Piaggio</option>
                                            <option value="Porsche">Porsche</option>
                                            <option value="Powertrac">Powertrac</option>
                                            <option value="Proton">Proton</option>
                                            <option value="Range-Rover">Range-Rover</option>
                                            <option value="Ranomoto">Ranomoto</option>
                                            <option value="Renault">Renault</option>
                                            <option value="Reva">Reva</option>
                                            <option value="Rolls-Royce">Rolls-Royce</option>
                                            <option value="Saab">Saab</option>
                                            <option value="Sakai">Sakai</option>
                                            <option value="Seat">Seat</option>
                                            <option value="Singer">Singer</option>
                                            <option value="Skoda">Skoda</option>
                                            <option value="Smart">Smart</option>
                                            <option value="Sonalika">Sonalika</option>
                                            <option value="Subaru">Subaru</option>
                                            <option value="Suzuki">Suzuki</option>
                                            <option value="Swaraj">Swaraj</option>
                                            <option value="Syuk">Syuk</option>
                                            <option value="TAFE">TAFE</option>
                                            <option value="Tata">Tata</option>
                                            <option value="Tesla">Tesla</option>
                                            <option value="Toyota">Toyota</option>
                                            <option value="Triumph">Triumph</option>
                                            <option value="TVS">TVS</option>
                                            <option value="Vauxhall">Vauxhall</option>
                                            <option value="Vespa">Vespa</option>
                                            <option value="Volkswagen">Volkswagen</option>
                                            <option value="Volvo">Volvo</option>
                                            <option value="Wave">Wave</option>
                                            <option value="Willys">Willys</option>
                                            <option value="Yamaha">Yamaha</option>
                                            <option value="Yanmar">Yanmar</option>
                                            <option value="Yuejin">Yuejin</option>
                                            <option value="Zongshen">Zongshen</option>
                                            <option value="Zotye">Zotye</option>
              

              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col">
            <input type="text" id="model" name="model" placeholder="Model"/>
          </div>
          <div className="col">
            <select id="type" name="type">
              <option value="">Any Type</option>
             
                                        
                                        <option value="Car">Car</option>
                                        <option value="Van">Van</option>
                                        <option value="SUV">SUV / Jeep</option>
                                        <option value="Crew Cab">Crew Cab</option>
                                        <option value="Pickup">Pickup / Double Cab</option>
                                        <option value="Bus">Bus</option>
                                        <option value="Lorry">Lorry / Tipper</option>
                                        <option value="Three Wheel">Three Wheel</option>
                                        <option value="Tractor">Tractor</option>
                                        <option value="Heavy-Duty">Heavy-Duty</option>
                                        <option value="Other">Other</option>
                                        <option value="motorcycles">Motorcycle</option>
                                        <option value="bicycles">Bicycles</option>
              
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <select id="Condition" name="Condition">
              <option value="">Select Condition</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Registered (Used)">Registered (Used)</option>
             <option value="Unregistered (Recondition)">Unregistered (Recondition)</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col">
            <select id="Price" name="Price">
              <option value="">Select Price Range</option>
              <option value="<10000">&lt;300000</option>
              <option value="10000-20000">300,000 - 400,000</option>
              <option value="20000-30000">400,000 - 500,000</option>
              <option value="20000-30000">500,000 - 600,000</option>
              <option value="20000-30000">600,000 - 700,000</option>
              <option value="20000-30000">700,000 - 800,000</option>
              <option value="20000-30000">800,000 - 900,000</option>
              <option value="20000-30000">900,000 - 1000,000</option>
              <option value="20000-30000"> &gt;1000,000</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="col">
            <select id="City" name="City">
              <option value="">Select City</option>
              <optgroup label="Colombo District">
                                            <option value="Colombo-district">Colombo District</option>
                                            <option value="Colombo">Colombo</option>
                                            <option value="Dehiwala-Mount-Lavinia">Dehiwala-Mount-Lavinia</option>
                                            <option value="Moratuwa">Moratuwa</option>
                                            <option value="Kotte">Kotte</option>
                                            <option value="Battaramulla">Battaramulla</option>
                                            <option value="Maharagama">Maharagama</option>
                                            <option value="Kotikawatta">Kotikawatta</option>
                                            <option value="Kolonnawa">Kolonnawa</option>
                                            <option value="Keselwatta">Keselwatta</option>
                                            <option value="Homagama">Homagama</option>
                                            <option value="Mulleriyawa">Mulleriyawa</option>
                                            <option value="Kesbewa">Kesbewa</option>
                                            <option value="Avissawella">Avissawella</option>
                                            <option value="Kaduwela">Kaduwela</option>
                                            <option value="Boralesgamuwa">Boralesgamuwa</option>
                                            <option value="Piliyandala">Piliyandala</option>
                                            <option value="Nugegoda">Nugegoda</option>
                                            <option value="Nawala">Nawala</option>
                                            <option value="Padukka">Padukka</option>
                                            <option value="Kottawa">Kottawa</option>
                                            <option value="Pannipitiya">Pannipitiya</option>
                                            <option value="Malabe">Malabe</option>
                                            <option value="Hanwella">Hanwella</option>
                                            <option value="Rajagiriya">Rajagiriya</option>
                                        </optgroup>
                                        <optgroup label="Gampaha District">
                                            <option value="Gampaha-district">Gampaha District</option>
                                            <option value="Gampaha">Gampaha</option>
                                            <option value="Negombo">Negombo</option>
                                            <option value="Katunayake">Katunayake</option>
                                            <option value="Hendala">Hendala</option>
                                            <option value="Welisara">Welisara</option>
                                            <option value="Ragama">Ragama</option>
                                            <option value="Kandana">Kandana</option>
                                            <option value="Ja-Ela">Ja-Ela</option>
                                            <option value="Wattala">Wattala</option>
                                            <option value="Kelaniya">Kelaniya</option>
                                            <option value="Peliyagoda">Peliyagoda</option>
                                            <option value="Minuwangoda">Minuwangoda</option>
                                            <option value="Kadawatha">Kadawatha</option>
                                            <option value="Dompe">Dompe</option>
                                            <option value="Divulapitiya">Divulapitiya</option>
                                            <option value="Nittambuwa">Nittambuwa</option>
                                            <option value="Mirigama">Mirigama</option>
                                            <option value="Kiribathgoda">Kiribathgoda</option>
                                            <option value="Veyangoda">Veyangoda</option>
                                            <option value="Ganemulla">Ganemulla</option>
                                        </optgroup>
                                        <optgroup label="Kandy District">
                                            <option value="Kandy-district">Kandy District</option>
                                            <option value="Kandy">Kandy</option>
                                            <option value="Gampola">Gampola</option>
                                            <option value="Nawalapitiya">Nawalapitiya</option>
                                            <option value="Wattegama">Wattegama</option>
                                            <option value="Harispattuwa">Harispattuwa</option>
                                            <option value="Kadugannawa">Kadugannawa</option>
                                        </optgroup>
                                        <optgroup label="Kurunegala District">
                                            <option value="Kurunegala-district">Kurunegala District</option>
                                            <option value="Kurunegala">Kurunegala</option>
                                            <option value="Kuliyapitiya">Kuliyapitiya</option>
                                            <option value="Polgahawela">Polgahawela</option>
                                            <option value="Pannala">Pannala</option>
                                        </optgroup>
                                        <optgroup label="Ratnapura District">
                                            <option value="Ratnapura-district">Ratnapura District</option>
                                            <option value="Ratnapura">Ratnapura</option>
                                            <option value="Balangoda">Balangoda</option>
                                            <option value="Eheliyagoda">Eheliyagoda</option>
                                            <option value="Kalawana">Kalawana</option>
                                            <option value="Embilipitiya">Embilipitiya</option>
                                        </optgroup>
                                        <optgroup label="Kalutara District">
                                            <option value="Kalutara-district">Kalutara District</option>
                                            <option value="Kalutara">Kalutara</option>
                                            <option value="Beruwala">Beruwala</option>
                                            <option value="Panadura">Panadura</option>
                                            <option value="Horana">Horana</option>
                                            <option value="Matugama">Matugama</option>
                                            <option value="Bandaragama">Bandaragama</option>
                                        </optgroup>
                                        <optgroup label="Puttalam District">
                                            <option value="Puttalam-district">Puttalam District</option>
                                            <option value="Puttalam">Puttalam</option>
                                            <option value="Chilaw">Chilaw</option>
                                            <option value="Nattandiya">Nattandiya</option>
                                            <option value="Wennappuwa">Wennappuwa</option>
                                            <option value="Marawila">Marawila</option>
                                            <option value="Dankotuwa">Dankotuwa</option>
                                        </optgroup>
                                        <optgroup label="Kegalle District">
                                            <option value="Kegalle-district">Kegalle District</option>
                                            <option value="Kegalle">Kegalle</option>
                                            <option value="Mawanella">Mawanella</option>
                                            <option value="Warakapola">Warakapola</option>
                                        </optgroup>
                                        <optgroup label="Matale District">
                                            <option value="Matale-district">Matale District</option>
                                            <option value="Matale">Matale</option>
                                            <option value="Dambulla">Dambulla</option>
                                            <option value="Sigiriya">Sigiriya</option>
                                        </optgroup>
                                        <optgroup label="Badulla District">
                                            <option value="Badulla-district">Badulla District</option>
                                            <option value="Badulla">Badulla</option>
                                            <option value="Bandarawela">Bandarawela</option>
                                            <option value="Haputale">Haputale</option>
                                            <option value="Welimada">Welimada</option>
                                            <option value="Mahiyanganaya">Mahiyanganaya</option>
                                        </optgroup>
                                        <optgroup label="Nuwara-Eliya District">
                                            <option value="Nuwara-Eliya-district">Nuwara-Eliya District</option>
                                            <option value="Nuwara-Eliya">Nuwara-Eliya</option>
                                            <option value="Hatton">Hatton</option>
                                            <option value="Talawakele">Talawakele</option>
                                        </optgroup>
                                        <optgroup label="Galle District">
                                            <option value="Galle-district">Galle District</option>
                                            <option value="Galle">Galle</option>
                                            <option value="Ambalangoda">Ambalangoda</option>
                                            <option value="Bentota">Bentota</option>
                                            <option value="Hikkaduwa">Hikkaduwa</option>
                                            <option value="Elpitiya">Elpitiya</option>
                                            <option value="Koggala">Koggala</option>
                                        </optgroup>
                                        <optgroup label="Matara District">
                                            <option value="Matara-district">Matara District</option>
                                            <option value="Matara">Matara</option>
                                            <option value="Weligama">Weligama</option>
                                        </optgroup>
                                        <optgroup label="Hambantota District">
                                            <option value="Hambantota-district">Hambantota District</option>
                                            <option value="Hambantota">Hambantota</option>
                                            <option value="Tangalle">Tangalle</option>
                                        </optgroup>
                                        <optgroup label="Batticaloa District">
                                            <option value="Batticaloa-district">Batticaloa District</option>
                                            <option value="Batticaloa">Batticaloa</option>
                                            <option value="Kattankudy">Kattankudy</option>
                                            <option value="Eravur">Eravur</option>
                                        </optgroup>
                                        <optgroup label="Ampara District">
                                            <option value="Ampara-district">Ampara District</option>
                                            <option value="Ampara">Ampara</option>
                                            <option value="Kalmunai">Kalmunai</option>
                                        </optgroup>
                                        <optgroup label="Jaffna District">
                                            <option value="Jaffna-district">Jaffna District</option>
                                            <option value="Jaffna">Jaffna</option>
                                            <option value="Chavakacheri">Chavakacheri</option>
                                            <option value="Valvettithurai">Valvettithurai</option>
                                        </optgroup>
                                        <optgroup label="Anuradapura District">
                                            <option value="Anuradapura-district">Anuradapura District</option>
                                            <option value="Anuradapura">Anuradapura</option>
                                        </optgroup>
                                        <optgroup label="Polonnaruwa District">
                                            <option value="Polonnaruwa-district">Polonnaruwa District</option>
                                            <option value="Polonnaruwa">Polonnaruwa</option>
                                        </optgroup>
                                        <optgroup label="Moneragala District">
                                            <option value="Moneragala-district">Moneragala District</option>
                                            <option value="Moneragala">Moneragala</option>
                                        </optgroup>
                                        <optgroup label="Trincomalee District">
                                            <option value="Trincomalee-district">Trincomalee District</option>
                                            <option value="Trincomalee">Trincomalee</option>
                                        </optgroup>
                                        <optgroup label="Mannar District">
                                            <option value="Mannar-district">Mannar District</option>
                                            <option value="Mannar">Mannar</option>
                                        </optgroup>
                                        <optgroup label="Vavuniya District">
                                            <option value="Vavuniya-district">Vavuniya District</option>
                                            <option value="Vavuniya">Vavuniya</option>
                                        </optgroup>
                                        <optgroup label="Kilinochchi District">
                                            <option value="Kilinochchi-district">Kilinochchi District</option>
                                            <option value="Kilinochchi">Kilinochchi</option>
                                        </optgroup>
                                        <optgroup label="Mullaitivu District">
                                            <option value="Mullaitivu-district">Mullaitivu District</option>
                                            <option value="Mullaitivu">Mullaitivu</option>
                                        </optgroup>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
      <p>Welcome to GearUp, the best automobile marketplace in Sri Lanka !</p>
    </div>
  );
}

export default Form;
