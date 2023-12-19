import React from "react";
import './Register.css';
import '../../App.css'

import { Link } from 'react-router-dom';


import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";

import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

const Register = () => {
    return (
        <div className="registerPage flex">
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title">Buy Your Medicines From Dispenser</h2>
                        <p>Use The Phase of Time..!</p>
                    </div>


                    <div className="footerDiv flex">
                        <span className="text">Already Have an Account </span>
                        <Link to={'/'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let Us Know You!</h3>
                    </div>

                    <form action="" className="form grid">

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon' />
                                <input type="email" name="" id="email" placeholder="Enter Your Email" />

                            </div>
                        </div>

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
                        </div>

                        <div className="inputDiv">
                            <button type="submit" className="btn flex">
                                <span>Register</span>
                                <AiOutlineSwapRight className='icon' />
                            </button>
                        </div>

                        <div className="inputDiv">
                            <span className="forgotPassword">
                                Forgot Your Password? <a href="">Click Here</a>
                            </span>

                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Register