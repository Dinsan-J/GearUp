import './Contactus.css';
import phone from './phone.png';
import mail from './mail.jpg';
import fb from './fb.webp';
import insta from './insta.jpg';

const Contactus= () => 
(
  <div className='bgc'>
	<body>

  
	<div class="containerc">
		<div class="text-center">
			<h1>Contact Us</h1>
			<div>
				
				Planning to buy your dream vechile?   You're in the right place!
				
			</div>
		</div>
		<div class="content">
			<div class="col-1">
				<div class="address-line">
					<img alt="location" src={fb} class="icon"/>
					<div class="contact-info">
						<div class="contact-info-title">FaceBook</div>
						
						<div>Gearup</div>
					</div>
				</div>

        <div class="address-line">
					<img alt="location" src={insta} class="icon"/>
					<div class="contact-info">
						<div class="contact-info-title">Instagram</div>
						<div>Gearup</div>
					</div>
				</div>
				<div class="address-line">
					<img alt="location" src={phone} class="icon"/>
					<div class="contact-info">
						<div class="contact-info-title">Phone</div>
						<div>+940702202620</div>
					</div>
				</div>
				<div class="address-line">
					<img alt="location" src={mail} class="icon"/>
					<div class="contact-info">
						<div class="contact-info-title">Email</div>
						<div>Gearup@gmail.com</div>
					</div>
				</div>
			</div>
			<div class="col-2">
				<form>
					<div className="form-container">
						<h2>Send Message</h2>
						<div class="form-row">
							<label>Full Name</label>
							<div>
								<input type="text" class="form-field"/>
							</div>
						</div>
						<div className="form-row">
							<label>Email</label>
							<div>
								<input type="text" class="form-field"/>
							</div>
						</div>
						<div class="form-row">
							<label>Type your message...</label>
							<div className="messege">
								<input type="text" class="form-field"/>
							</div>
						</div>
						<input type="button" class="send-btn" value="Send"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	</body>
	</div>


);
export default Contactus;

