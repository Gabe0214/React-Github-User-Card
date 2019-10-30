import React from 'react'
import styled from 'styled-components'

const FollowerContainer = styled.div`
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
 const Img = styled.img` 
 
 width: 30%;
 margin-top: 0.8rem;
 align-self: center;

`


const Followers = props => {
    return (
        
        <FollowerContainer key = {props.follower.id}>
            <Img src ={props.follower.avatar_url}/>
            <h2>{props.follower.login}</h2>
            <p>Pofile: <a href= {props.follower.html_url} target='_blank'>{props.follower.html_url}</a> </p> 
        
        </FollowerContainer>
        
    )
}


export default Followers;