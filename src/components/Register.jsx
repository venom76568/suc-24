import React from 'react';
import './register.css';

const Register = () => (
  <div>
    <div id="title">Registration Portal</div>
    <div id="form">
        <form action="action_page.php" method="get">
            <div class="container">
                {/* <!-- <label for="uname"><b></b></label> --> */}
                <input type="text" placeholder="TEAM NAME" name="uname" required/>

                {/* <!-- <label for="uname"><b></b></label> --> */}
                <input type="text" placeholder="LEADER NAME" name="uname" required/>

                {/* <!-- <label for="uname"><b></b></label> --> */}
                <input type="number" placeholder="CONTACT NUMBER" name="uname" required/>
            
                {/* <!-- <label for="uname"><b></b></label> --> */}
                <input type="email" placeholder="EMAIL-ID" name="uname" required/>
            
            
                {/* <!-- <label for="psw"><b></b></label> --> */}
                <input type="password" placeholder="PASSWORD" name="psw" required/>
                <button type="submit">Sign Up</button>
                <span>Already Registered? <a href="">Login here</a></span>
                </div>
        </form>
    </div>
    
  </div>
);

export default Register;