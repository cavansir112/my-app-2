import React, { Component } from 'react';
import './App.css';
import './companed/test.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './companed/user';
import Add from './companed/add';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className=" container box">
          <Navbar />
          <Add
            
            surname = "muradov"    
            age = "17" 
          />

          <Add
            name = "ceyhun"
            surname = "ismayilov"    
            age = "17" 
          />
        </div>
        
      </div>
    );
  }
}

export default App;
