import React from 'react'
import "./PlantCard.css"

function PlantCard( {name,cateogary,price,height,color}) {
  return (
    <div className='plantcard'>
        <h1>{name}</h1>
        <p>cateogary:{cateogary}</p>
        <p>price:{price}</p>
        <p>height:{height}</p>
        <p>color:{color}</p>
        
    </div>
  )
}

export default PlantCard