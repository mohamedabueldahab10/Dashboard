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
          <div className="login-section">
            <h2>logo</h2>
            <h4>Welcome</h4>
            <p>
              This application helps you in following up your work and providing
              a measure of efficiency and good performance for customers and
              following up on employees
            </p>
            <button>Sign Up</button>
          </div>

          <div className="signin-section">
            <h3>Sign In</h3>
            <div className="inputs">
              <label>Email</label>
              <input type="text" placeholder="Email"></input>
              <label>Password</label>
              <input type="text" placeholder="Password"></input>
            </div>
            <div className="forgetpassword">
              {"Forget Password? "}
              <Link to=""></Link>
            </div>
            <button className="Signin-btn">login</button>
            <div className="contact">
              <div>
                <Link to="https://vsofteg.com">https://vsofteg.com</Link>
              </div>
              <div>
                <p>English</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.229"
                  height="21.023"
                  viewBox="0 0 29.229 26.023"
                >
                  <g
                    id="icons_Q2"
                    data-name="icons Q2"
                    transform="translate(-3.977 -1.977)"
                  >
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M33.084,26.266,25.848,10.847a1.553,1.553,0,0,0-1.389-.805H23a1.553,1.553,0,0,0-1.389.805L18.1,18.34a17.528,17.528,0,0,1-4.093-2.663c2.485-2.477,4.312-5.449,4.532-8.112H20a1.5,1.5,0,0,0,1.535-1.053,1.113,1.113,0,0,0-.342-1,1.588,1.588,0,0,0-1.12-.426H13.861v-1.8a1.372,1.372,0,0,0-1.243-1.3,1.649,1.649,0,0,0-1.179.29,1.166,1.166,0,0,0-.5.949V5.088H5.529A1.5,1.5,0,0,0,3.994,6.14a1.113,1.113,0,0,0,.342,1,1.588,1.588,0,0,0,1.12.426h10.16c-.219,1.858-1.681,4.149-3.581,6.254A21.139,21.139,0,0,1,9.7,10.785a1.607,1.607,0,0,0-1.608-.743,1.453,1.453,0,0,0-1.047.679,1.072,1.072,0,0,0,.024,1.117,24.307,24.307,0,0,0,3,3.839,17.8,17.8,0,0,1-5.116,3.1,1.342,1.342,0,0,0-.95,1.424,1.43,1.43,0,0,0,1.462.991l.585-.124a19.611,19.611,0,0,0,5.993-3.592A20.627,20.627,0,0,0,17,20.631l-2.631,5.635a1.077,1.077,0,0,0,.11,1.165A1.538,1.538,0,0,0,15.688,28a1.629,1.629,0,0,0,1.389-.805l2.851-6.007h7.6L30.38,27.2A1.629,1.629,0,0,0,31.769,28a1.538,1.538,0,0,0,1.206-.569A1.077,1.077,0,0,0,33.084,26.266ZM21.1,18.711l2.631-5.635,2.631,5.635Z"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
