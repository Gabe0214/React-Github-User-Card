import React from 'react'
import styled from 'styled-components'

const FollowerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center; 
max-width: 50%;
margin 0 auto; 
text-align: center;
`

const Followers = props => {
    return (
        <FollowerContainer key = {props.follower.id}>
            <img src ={props.follower.avatar_url}/>
            <h2>{props.follower.login}</h2>
            <p>Pofile: <a href= {props.follower.html_url} target='_blank'>{props.follower.html_url}</a></p>
            <p>{props.follower.location}</p>

        </FollowerContainer>
    )
}


export default Followers;