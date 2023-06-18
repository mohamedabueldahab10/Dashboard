import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import "./Login.css";

export default function Login() {
  return (
    <div className="form-content">
      <div className="sidebar2">
        <ul>
          <li>
            <Link to="/">
              <FiHome className="sidebar-logo" />
              {"Home"}
            </Link>
          </li>
        </ul>
      </div>
      {/* ============login============*/}
      <div className="login-content">
        <div className="login-form">
          <div className="signIn-section">
            <h2>logo</h2>
            <h4>Welcome</h4>
            <p>
              This application helps you in following up your work and providing
              a measure of efficiency and good performance for customers and
              following up on employees
            </p>
          </div>

          <div className="login-section">
            <h3>Log In</h3>
            <div className="inputs">
              <div>
                <label>Email</label>
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="inputs">
              <div>
                <label>Password</label>
              </div>
              <div>
                <input type="text" placeholder="Password" />
              </div>
            </div>
            <div className="forgetpassword">
              <Link to="">{"Forget Password? "}</Link>
            </div>
            <button className="Signin-btn">login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
