import React from 'react'

const User = props => {
  return(
      <div>
          <img src ={props.user.img}/>
          <h2>{props.user.name}</h2>
          <p>{props.user.bio}</p>
          <p>{props.user.follwers}</p>
      </div>
  )
}


export default User; 