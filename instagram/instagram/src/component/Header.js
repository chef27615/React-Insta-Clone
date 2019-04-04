import React, { Component } from 'react'

class Header extends Component {
  
  state={
    user: this.props.userInfo.username
  }
  
  
  
  render() {
    
    return (
      <div className="headerDiv">
        <div className="instaLogos">
            <i className="fab fa-instagram">  |</i>
            <h2 style={logoFont}> Instagram</h2>
        </div>
         
        <div className="searchBar">
            <input 
                type="text"
                title=""
                placeholder="Search"
                onChange={this.handlechange}
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



const logoFont = {
  fontFamily : 'Norican'
}



export default Header;
