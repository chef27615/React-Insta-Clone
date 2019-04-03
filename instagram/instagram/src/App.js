import React, { Component } from 'react';

import './App.css';
import Header from './component/Header';
import PostContainer from './component/PostContainer';
import dummyData from './dummy-data';
import CommentSection from './component/CommentSection';


class App extends Component {
  
  state={
    userData: []
  }
  
  componentDidMount(){
    this.setState({
      userData: dummyData
    })
  }
  

  
  render() {
    
    return (
      <div className="App">
        <Header />

        {this.state.userData.map(user=>
          <PostContainer user={user} key={user.id} />
          )}

        {this.state.userData.map(user=>
          <CommentSection user={user} key={user.id} />
          )}  
      </div>
    );
  }
}

export default App;
