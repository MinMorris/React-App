import React from 'react';
import SubmitButton from './SubmitButton';

function LoginForm() {
    return (
        <center>  
        <div id="loginForm" className="container">
            <h3>Login Here</h3>
            <label htmlFor="Username"></label>
            <input type="text" placeholder="Username"></input><br></br>
            <label htmlFor="Password"></label>
            <input type="password" placeholder="Password"></input>
            {SubmitButton()}
        </div>  
        </center>
    );
}

export default LoginForm;