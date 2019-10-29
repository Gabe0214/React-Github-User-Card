import React from 'react'


const Followers = props => {
    return (
        <div key = {props.follower.id}>
            <h2>{props.follower.name}</h2>\
            <p>{props.follower.bio}</p>
            <p>{props.follower.location}</p>

        </div>
    )
}