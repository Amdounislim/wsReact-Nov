import React from "react";
import './Card.css'

const Card = ({user}) => {
  return (
    <div className="card" style={{backgroundColor:user.color}}>
      <img
        src={user.image}
        alt="logo-patient"
        style={{width:"20px"}}
      />
      <h3>{user.title}</h3>
      <p>{user.description}</p>
      <select>
          {console.log(user.country)}
          {user.country && user.country.map(el=><option>{el}</option>)}
      </select>
    </div>
  );
};

export default Card;
