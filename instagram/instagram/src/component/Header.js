import React, { Component } from 'react'
import instaLogoFont from '../instaLogoFont.png';


class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <div className="instaLogos">
            <i className="fab fa-instagram"></i>
            <img src="../instaLogoFont.png" />
        </div>
        <div className="searchBar">
            <input 
                
                type="text"
                title=""
                placeholder="Search"
            />
        </div>

        <div className="userIcon">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </div>
      </div>
    )
  }
}

export default Header;
