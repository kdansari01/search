import React from "react";
import "./style.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Profile from "../../assests/image/profile.png"
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Hamburger from "../../assests/image/hamburger.png"


const Navbar = () => {

  return (
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid d-flex justify-content-around px-4">
          <NavLink className="navbar-brand text-light" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src={Hamburger} alt="ham"/>
          </button>
          <div className="collapse navbar-collapse flex-grow-2 " id="navbarSupportedContent">
          <form className="searchBarSection d-flex m-sm-2 mt-4 " role="search">
              <input
                className="searchInput  me-2"
                type="search"
                placeholder="What are you looking here eg. freelancer, projects"
                aria-label="Search"
              />
              <button className="searchButton " type="submit">
                <SearchIcon  className=" text-light" />
              </button>
            </form>
            <div className="rightNavabr" >
            <ul className="navbar-nav  d-flex justify-content-center px-lg-5 ">
              <li className="nav-item">
                <NavLink className=" nav-link active " aria-current="page" to="/">
                <h5> Post Project</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link px-lg-4 " to="/searchProject">
                 <h5> Search Project</h5>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link " to="/">

               <ChatBubbleOutlineIcon className="badgeIcon"  fontSize="30"/>
               <span className="badge">.</span>
               </NavLink>

              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FavoriteBorderIcon className="badgeIcon" fontSize="30" />
               <span className="badge">.</span>
                </NavLink>

              </li>
              <li className="imgHead nav-item">
              <NavLink className="imgsection nav-link " to="/profilePage">
              <img src={Profile} alt="profile" className="profileImg rounded-1 "/>
                </NavLink>

              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
