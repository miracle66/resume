import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Home,Home2} from './Home';
// import {Test} from './Test';
// import Home2 from './Home';




class App extends Component {
  state={
      data:2017,
  }
  AddOne(){
      this.setState({
          data:this.state.data+1
      })
  }
  render() {
    return (
      <div className="App">
      <button onClick={()=>this.AddOne()}>+1</button>
        <Home name={this.state.data}  />
        <Home2 />
      </div>
    );
  }
}

export default App;
