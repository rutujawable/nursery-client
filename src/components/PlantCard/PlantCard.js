import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function PlantCard( {id,name,cateogary,price,height,color,image}) {


  const deletePlant = async (plantid) =>{

       const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plants/${plantid}`)
  }
  return (
    <div className='container'>

     
    <div className='plantcard'>
    <img src={image} className='image'></img>
        <h1>{name}</h1>
        <p>cateogary:{cateogary}</p>
        <p>price:{price}</p>
        <p>height:{height}</p>
        <p>color:{color}</p>

<button className='btn'><Link to={`/update/${id}` }  type='button' className='btn' > update </ Link></button>
        <button type='button'className='btn' onClick={()=>{
          deletePlant(id)
        }} > delete </button>
    </div>
    </div>
  )
}

export default PlantCard