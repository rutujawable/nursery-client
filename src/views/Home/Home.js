import React, { useEffect } from 'react'
import  PlantCard from "./../../components/PlantCard/PlantCard"
import "./Home.css"
import { useState } from 'react'
import axios from 'axios'
import toast , { Toaster } from 'react-hot-toast'


function Home() {

   
   const [plants,setPlants] =   useState([])
   const loadPlants = async ()=>{
    toast.loading("plants loading")
    const response = await axios.get("https://student-server-s4aq.onrender.com")
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
                 color
              } = plant;
              
              return <PlantCard key={i} name={name} id ={_id} cateogary={cateogary} price={price} height={height} color={color}/>

            })
          }
            <Toaster/>

          </div>
        )

        






    
  
}

export default Home;
