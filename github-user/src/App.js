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
      followers: [],
      followerName: '',
      follower: {}
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


  changeHandler = e => {
    this.setState({followerName: e.target.value})
  }
   

componentDidUpdate(prevState){
  if(prevState.followerName !== this.state.followerName) {
     this.onSubmit();
     console.log('component updated')
  }
}


 onSubmit = e => {
   e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.followerName}`)
    .then( res => {
      console.log(res)
      this.setState({follower:res.data })
    
    })
    .catch(error => {
      console.log('error', error)
    })

 }


   
   render(){  
    return (
    <div>
      <input type ='text' name='followerName' value ={this.state.followerName} onChange={this.changeHandler}/>
      <button type ='submit' onClick={this.onSubmit}>Search Follower</button>
      <UserCard user ={this.state.user} src ={this.state.user}/> 
      <UserCard user = {this.state.follower} src ={this.state.follower}/> 
       {this.state.followers.map(follower => (
         <FollowersComponent follower ={follower}/> 
       ))}
    </div>
    );
    } 
}

export default App;
