// import React from 'react'
import { Container } from "react-bootstrap";

function CardDesign({ title, price, color, image, availability, type, brand }) {
  return (
     
      <div className="card bestcard">
        <h5 className="card-title card-name">{title}</h5>
        <h5 className="card-title card-type">TYPE : {type}</h5>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text card-color">Color : {color}</p>
          <p className="card-text card-price">
            {price} <sup>USD</sup>{" "}
          </p>
        </div>
      </div>
  );
}

export default CardDesign;

// function SingleCard({title,price,color,image,availability,type,brand}) {

//     return (

//   <div className="card bestcard" >
//   <h5 className="card-title card-name">{title}</h5>
//   <h5 className="card-title card-type">{type}</h5>
//   <img src={image} className="card-img-top" alt="..." />
//   <div className="card-body">
//   <p className="card-text card-color">{color}</p>
//   <p className="card-text card-price">{price} <sup>USD</sup> </p>
//   <p className="card-text card-price">{availability}  </p>
//   <p className="card-text card-price">{brand} </p>
//   </div>
//   </div>

//     );
//   }

//   export default SingleCard;
