import React from "react";
import './Login.css';
import '../../App.css'

import { Link } from 'react-router-dom';


import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

const Login = () => {
    return (
        <div className="loginPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Buy Your Medicines From Dispenser</h2>
                        <p>Use The Phase of Time..!</p>
                    </div>


                    <div className="footerDiv flex">
                        <span className="text">Don't Have an Account </span>
                        <Link to={'/register'}>
                            <button className="btn">SignUp</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">Login Status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" name="" id="username" placeholder="Enter Username" />

                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" name="" id="password" placeholder="Enter Password" />
                            </div>
                            <br />

                            <button type="submit" className="btn flex">
                                <span>Login</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>
                            <br />

                            <span className="forgotPassword">
                                Forgot Your Password? <a href="">Click Here</a>
                            </span>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login