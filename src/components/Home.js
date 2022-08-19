import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import D3 from "./D3";

export default function Home() {
  return (
    <div className="mainDiv">
      <div className="navBar">
        <div className="logo-content">
          <div className="navbar-logo">
            <p>Logo</p>
          </div>
          <p className="navbar-vhup">V-Hub</p>
        </div>

        {/* =================================== */}
        <div className="input-search">
          <div className="iconsearch">
            <input type="text" placeholder="        Search"></input>
            <BiSearch className="icon" />
          </div>

          <div className="iconList">
            <div className="messageIcon">
              <AiFillMessage className="logoSize" />
              <span className="mess">13</span>
            </div>

            <div className="notificationIcon">
              <IoIosNotifications className="logoSize" />
              <span className="not">2</span>
            </div>

            <div className="messageIcon">
              <GoPerson className="logoSize brdr" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* ========================Sidebar==================== */}
      <div className="content-section">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/Login">
                <AiOutlineLogin className="sidebar-logo" />
                {"Login "}
              </Link>
            </li>
          </ul>
        </div>
        {/* ============Content============*/}
        <div className="content">
          <h3 className="dashTitle">My Dashboard</h3>
          <div className="content-items">
            <div className="input">
              <input
                type="text"
                placeholder="search for contacts..."
                className="search-input"
              ></input>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Filter By Day.."
                className="filter "
              ></input>
            </div>
            <div className="input">
              <button>Search</button>
            </div>
          </div>
          {/* ============details========= */}
          <div className="details">
            <div className="group1">
              <div className="details-item1">
                <div className="box">
                  <h4>500</h4>
                  <FaDollarSign className="FaDollarSign" />
                </div>
                <p>All Clients</p>
              </div>
              <div className="details-item2">
                <div className="box">
                  <div><h4>500</h4></div>
                  <div><AiFillStar className="AiFillStar" /></div>
                </div>
                <p>All AWD</p>
              </div>
            </div>
            <div className="group2">
              <div className="details-item3">
                <div className="box">
                  <h4>500</h4>
                  <MdDeliveryDining className="MdDeliveryDining" />
                </div>
                <p>Online Delivers</p>
              </div>
            </div>
          </div>
          <D3 />
        </div>
      </div>
    </div>
  );
}
