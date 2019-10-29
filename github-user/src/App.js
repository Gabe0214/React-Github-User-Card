import React from 'react';
import './App.css';

 class App extends React.Component {
  constructor(){
    super()
    this.state = { name: 'Gabe'}
  }
  
  

   
   render(){  
    return (
    <div>
      <h1>{this.state.name}</h1>
    </div>
    );
    } 
}

export default App;
