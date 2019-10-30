import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
width: 30%;
margin-top: 0.8rem;
align-self: center;

`

const UserContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center; 
max-width: 30%;
margin:  0 auto; 
text-align: center;
border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  width: 100%; 
  margin-bottom: 2rem;

`
const User = props => {
  return(
      <UserContainer>
          <Img src ={props.user.avatar_url}/>
          <h2>{props.user.name}</h2>
          <p> Bio : {props.user.bio}</p>
          <p>Followers: {props.user.followers}</p>
      </UserContainer>
  )
}


export default User; 