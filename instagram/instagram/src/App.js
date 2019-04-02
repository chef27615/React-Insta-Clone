import React, { Component } from 'react';

import './App.css';
import Header from './component/Header';
import PostContainer from './component/PostContainer';
import dummyData from './dummy-data';


class App extends Component {
  
  state={
    userData: dummyData
  }
  
  
  
  
  render() {
    return (
      <div className="App">
        <Header />

        {this.state.userData.map(user=>
          <PostContainer user={user} key={user.id} />
          )}

        
      </div>
    );
  }
}

export default App;
