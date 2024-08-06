
import React from "react";
import './Forpass.css'
import plock from './plock.png'

const Forpass=() => 
  (
<div className="fb">
<body>
    <div class="card">
        <p class="lock-icon"><img src={plock}  alt="lock"/></p>
        <h2>Forgot Password?</h2>
        <p>You can reset your Password here</p>
        <input type="text" class="passInput" placeholder="Email address"/>
        <button>Send My Password</button>
    </div>
</body>
</div>



  );

  export default Forpass;
