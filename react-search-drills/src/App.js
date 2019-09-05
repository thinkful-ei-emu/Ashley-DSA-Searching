import React from 'react';
import './App.css';
import Linear from './linear';
import Binary from './binary';

class App extends React.Component {
  
  render(){

   

    return (
      <div className="App">
      <Linear/>
      <Binary/>
      </div>
    );

  }
  

}

export default App;
