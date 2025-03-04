import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

// function PlantCard( {id,name,cateogary,price,height,color,image}) {


//   const deletePlant = async (plantid) =>{

//        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plants/${plantid}`)
//   }
//   return (
//     <div className='container'>

     
//     <div className='plantcard'>
//     <img src={image} className='image'></img>
//         <h1>{name}</h1>
//         <p>cateogary:{cateogary}</p>
//         <p>price:{price}</p>
//         <p>height:{height}</p>
//         <p>color:{color}</p>

// <button className='btn'><Link to={`/update/${id}` }  type='button' className='btn' > update </ Link></button>
//         <button type='button'className='btn' onClick={()=>{
//           deletePlant(id)
//         }} > delete </button>
//     </div>
//     </div>
//   )
// }






function PlantCard({ id, name, category, price, height, color, image }) {
  const deletePlant = async (plantid) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plants/${plantid}`);
      console.log("Plant deleted", response);
    } catch (error) {
      console.error("Error deleting plant", error);
    }
  };

  return (
    <div className="plant-card">
      <div className="plant-card-content">
        <img src={image} alt={name} className="plant-image" />
        <div className="plant-info">
          <h1 className="plant-name">{name}</h1>
          <p className="plant-category">Category: {category}</p>
          <p className="plant-price">Price: ${price}</p>
          <p className="plant-height">Height: {height} cm</p>
          <p className="plant-color">Color: {color}</p>
        </div>
      </div>
      <div className="plant-actions">
        <Link to={`/update/${id}`} className="btn update-btn">Update</Link>
        {/* <button className="btn delete-btn" onClick={() => deletePlant(id)}>Delete</button> */}
      </div>
    </div>
  );
}

export default PlantCard;



















