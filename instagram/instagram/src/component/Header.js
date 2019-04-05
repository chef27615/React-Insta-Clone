import React, { Component } from 'react'
import styled from 'styled-components'; 


const HeaderDiv = styled.div`
  width: 55%;
  height: 3rem;;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

`
const SearchBar = styled.div`
  align-self: center;
  height: 100%;

  input{
    margin-top: 13px;
    width: 100%;
    text-align: center;
    height: 25px;
    background-color: #ededed;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
  }

`
const UserIcon = styled.div`
  display: flex;
  justify-content: space-evenly;

  i{
    font-size: 25px;
    margin-top: 13px;
    color: #999;
  }

`



class Header extends Component {
  
  state={
    user: this.props.userInfo.username
  }
  
  
  
  render() {
    
    return (
      <HeaderDiv>
        <div className="instaLogos">
            <i className="fab fa-instagram">  |</i>
            <h2 style={logoFont}> Instagram</h2>
        </div>
         
        <SearchBar>
            <input 
                type="text"
                title=""
                placeholder="Search"
                onChange={this.handlechange}
            />
        </SearchBar>

        <UserIcon>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
        </UserIcon>
      </HeaderDiv>
    )
  }
}



const logoFont = {
  fontFamily : 'Norican'
}



export default Header;
