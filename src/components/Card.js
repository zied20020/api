import React from 'react'
import "../App.css";

const Card = ({user,char_id}) => {
    return (
        <div>
 <div className="card middle">
  <div className="front">
  <div className="helloo"><h1>Users N°{user.id}</h1></div>
  </div>
  <div className="back">
    <div className="back-content middle">
      <h2>Name : {user.name}</h2>
      <span>username : {user.username}</span>
      <div className="sm">
        <h3>email : {user.email}</h3>
        <h3>phone : {user.phone}</h3>
        <h3>website : {user.website}</h3>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Card
