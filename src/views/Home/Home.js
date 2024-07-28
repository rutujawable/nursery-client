import React, { useEffect } from 'react'
import  PlantCard from "./../../components/PlantCard/PlantCard"
import "./Home.css"
import { useState } from 'react'
import axios from 'axios'
import toast , { Toaster } from 'react-hot-toast'
import plus from "./plus.png"
import { Link } from 'react-router-dom'


function Home() {

   
   const [plants,setPlants] =   useState([])
   const loadPlants = async ()=>{
    toast.loading("plants loading")
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    setPlants(response.data.data)
    toast.dismiss()
    toast.success("plants loaded successfully")
   }
        
    useEffect(()=>{

      loadPlants()
    }, [])

        return (
          <div>
            <h1 className='plant'>Plants</h1>

          {
             plants.map((plant,i)=>{
              const {
                 _id,
                 name,
                 cateogary,
                 price,
                 height,
                 color,
                 image
              } = plant;
              
              return <PlantCard key={i} 
              name={name}
               id ={_id}  image={image}
                cateogary={cateogary} price={price} height={height} color={color}
                loadPlants={loadPlants}/>

            })
          }
            <Toaster/>
            <Link to="/addplant">
            
              <img src={plus} className='img'></img>
              </Link>

          </div>
        )

        






    
  
}

export default Home;
