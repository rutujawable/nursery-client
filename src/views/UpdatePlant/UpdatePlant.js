// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useState} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
//  import toast,{Toaster} from 'react-hot-toast';
//  import "./UpdatePlant.css";
 
// function UpdatePlant() {
//     const {id} = useParams();
    
//     const [name, setName]= useState("")
//     const [cateogary, setCateogary]= useState("")
//     const [price, setPrice]= useState("")
//     const [height, setHeight]= useState("")
//     const [color, setColor]= useState("")
//     const [image,setImage]=useState("")

//     const updatePlant = async ()=>{
//         const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,
//             {
//                 name:name,
//                 cateogary:cateogary,
//                 image:image,
//                 height:height,
//                 price:price,
//                 color:color

//             })

//             toast.success(response.data.message)
        
       
//     }

//     const loadPlant = async (id)=>{
//         if (!id){
//             return;
//         }
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)

//         const  plantData = response.data.data

//         const {name,image,price,cateogary,height,color} = plantData

//         setName(name)
//         setCateogary(cateogary)
//         setPrice(price)
//         setHeight(height)
//         setColor(color)
//         setImage(image)


//     }

//     useEffect(()=>{
//         if (id){
//             loadPlant(id)
            
//         }
//     }, [id])

//   return (
//     <div>
//         UpdatePlant:{id}
    
//     <form>

// <input type="text"
//        placeholder='Enter name of the plant'
//        value={name}
//        onChange={(e)=>setName(e.target.value)}
//        className='plant_input'
// />

// <input type="text"
//        placeholder='Enter cateogary of the plant'
//        value={cateogary}
//        onChange={(e)=>setCateogary(e.target.value)}
//        className='plant_input'
// />

// <input type="number"
//        placeholder='Enter price of the plant'
//        value={price}
//        onChange={(e)=>setPrice(e.target.value)}
//        className='plant_input'
// />

// <input type="number"
//        placeholder='Enter height of the plant'
//        value={height}
//        onChange={(e)=>setHeight(e.target.value)}
//        className='plant_input'
// />

// <input type="text"
//        placeholder='Enter color of the plant'
//        value={color}
//        onChange={(e)=>setColor(e.target.value)}
//        className='plant_input'
// />
// <img src={image} className='plant_img'></img>

// <input type="text"
//        placeholder='Enter image  of the plant'
//        value={image}
//        onChange={(e)=>setImage(e.target.value)}
//        className='plant_input'
// />


//  <button type='button' className='btn' onClick={updatePlant}> Update Plant</button>
      
// <div className='plant_input'>  <Link to="/" className="title" > show all plants</Link> </div>

// </form>
    
    
//     <Toaster/>
    
//     </div>

    
//   )
// }

// export default UpdatePlant



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './UpdatePlant.css';

function UpdatePlant() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [cateogary, setCateogary] = useState('');
  const [price, setPrice] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');

  const updatePlant = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/plant/${id}`,
        {
          name: name,
          cateogary: cateogary,
          image: image,
          height: height,
          price: price,
          color: color,
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Error updating plant!');
    }
  };

  const loadPlant = async (id) => {
    if (!id) {
      return;
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`);
    const plantData = response.data.data;
    const { name, image, price, cateogary, height, color } = plantData;

    setName(name);
    setCateogary(cateogary);
    setPrice(price);
    setHeight(height);
    setColor(color);
    setImage(image);
  };

  useEffect(() => {
    if (id) {
      loadPlant(id);
    }
  }, [id]);

  return (
    <div className="update-plant-container">
      <h1 className="update-plant-header">Update Plant: {id}</h1>

      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name of the plant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter category of the plant"
            value={cateogary}
            onChange={(e) => setCateogary(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Enter price of the plant"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Enter height of the plant"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter color of the plant"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <img src={image} alt="Plant" className="plant_img" />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter image URL of the plant"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="plant_input"
          />
        </div>

        <div className="form-group">
          <button type="button" className="btn" onClick={updatePlant}>
            Update Plant
          </button>
        </div>

        <div className="form-group">
          <Link to="/" className="title">
            Show all plants
          </Link>
        </div>
      </form>

      <Toaster />
    </div>
  );
}

export default UpdatePlant;
