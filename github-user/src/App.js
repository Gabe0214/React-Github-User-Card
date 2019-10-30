import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowersComponent from './components/FollowersComponent'
 class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      user: {}, 
      followers: [] 
    }
  }
  
  componentDidMount() {
    axios 
     .get('https://api.github.com/users/Gabe0214') 
       .then(res => {
         console.log(res.data)
         this.setState({
           user: res.data
         })
       }, )
     this.fetchFollowers(); 
  }

  fetchFollowers = () => {
    axios
    .get('https://api.github.com/users/Gabe0214/followers')
     .then(res => {
       console.log(res)
       this.setState({
         followers: res.data
       })
        
       
     })
     .catch(error => {
       console.log('error', error);
     })
     
  }
   
   
   render(){  
    return (
    <div>
      <UserCard user ={this.state.user} src ={this.state.user}/> 
       {this.state.followers.map(follower => (
         <FollowersComponent follower ={follower}/> 
       ))}
    </div>
    );
    } 
}

export default App;
