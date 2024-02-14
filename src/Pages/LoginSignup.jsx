import { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignup = () => {

    const [state, setState] = useState('Login');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value })
    }

    const signup = async () => {
        console.log('Sign Up fun is called');
        console.log(formData);
    }

    const login = async () => {
        console.log('login fun is called');
        console.log(formData);
    }


  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
            {
                state==='Sign Up'
                ? <input type="text" name="username" value={formData.username} onChange={changeHandler} id="" placeholder="Your name" />
                : <></>
            }
          <input type="email" name="email" value={formData.email} onChange={changeHandler} id="" placeholder="Email Address" />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} id="" placeholder="Password" />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        <button onClick={()=>{ state==='Sign Up'?signup():login() }}>Continue</button>
        {
            state==='Sign Up'
            ? <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState('Login')}}>Login</span></p> 
            : <p className="loginsignup-login">Create an account? <span onClick={()=>{setState('Sign Up')}}>Click here</span></p>
        }
      </div>
    </div>
  );
};

export default LoginSignup;
