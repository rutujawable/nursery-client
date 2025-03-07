// import React, { useState } from 'react'
// import "./../UpdatePlant/UpdatePlant.css"
// import toast, {Toaster} from 'react-hot-toast'
// import axios from 'axios'
// import { Link } from 'react-router-dom'




// function AddPlant() {


//     const [name, setName]= useState("")
//     const [cateogary, setCateogary]= useState("")
//     const [price, setPrice]= useState("")
//     const [height, setHeight]= useState("")
//     const [color, setColor]= useState("")
//     const [image,setImage]=useState("")

//     const addPlant = async ()=>{
//       toast.loading("adding plants....")
//       if (!name || !cateogary || !price || !height || !color || !image){
//         toast.error("please enter all details")
//         return
//       }

//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`,{
//         name:name,
//         cateogary:cateogary,
//         price:price,
//         height:height,
//         color:color,
//         image:image
//       })

//       toast.dismiss()
//       toast.success(response.data.message)

//       setName("")
//         setCateogary("")
//         setPrice("")
//         setHeight("")
//         setColor("")
      
//         setTimeout(()=>{

        
//           window.location.href = '/'
//         }
//     , 2000)
      

//     }

    

//   return (
//     <div>
//     <h1 className='title'>Add Plant</h1>


//     <div className='form'>
    


    
//       <form>

//       <input type="text"
//              placeholder='Enter name of the plant'
//              value={name}
//              onChange={(e)=>setName(e.target.value)}
//              className='plant_input'
//       />

// <input type="text"
//              placeholder='Enter cateogary of the plant'
//              value={cateogary}
//              onChange={(e)=>setCateogary(e.target.value)}
//              className='plant_input'
//       />

// <input type="number"
//              placeholder='Enter price of the plant'
//              value={price}
//              onChange={(e)=>setPrice(e.target.value)}
//              className='plant_input'
//       />

// <input type="number"
//              placeholder='Enter height of the plant'
//              value={height}
//              onChange={(e)=>setHeight(e.target.value)}
//              className='plant_input'
//       />

// <input type="text"
//              placeholder='Enter color of the plant'
//              value={color}
//              onChange={(e)=>setColor(e.target.value)}
//              className='plant_input'
//       />
//       <img src={image} className='plant_img'></img>
   
//    <input type="text"
//              placeholder='Enter image  of the plant'
//              value={image}
//              onChange={(e)=>setImage(e.target.value)}
//              className='plant_input'
//       />


//        <button type='button' className='btn' onClick={addPlant}> Add Plant</button>
            
//      <div className='plant_input'>  <Link to="/" className="title" > show all plants</Link> </div>

//       </form>

         
    
    
//       <Toaster/>


//       </div>
//       </div>

//   )
// }


// export default AddPlant



import React, { useState } from 'react';
import './AddPlant.css'; // Import updated CSS file
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPlant() {
  const [name, setName] = useState('');
  const [cateogary, setCateogary] = useState('');
  const [price, setPrice] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');

  const addPlant = async () => {
    toast.loading('Adding plant...');

    if (!name || !cateogary || !price || !height || !color || !image) {
      toast.error('Please enter all details');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
        name: name,
        cateogary: cateogary,
        price: price,
        height: height,
        color: color,
        image: image,
      });

      toast.dismiss();
      toast.success(response.data.message);

      setName('');
      setCateogary('');
      setPrice('');
      setHeight('');
      setColor('');
      setImage('');

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      toast.dismiss();
      toast.error('Error adding plant!');
    }
  };

  return (
    <div className="add-plant-container">
      <h1 className="add-plant-header">Add Plant</h1>

      <form>
        <input
          type="text"
          placeholder="Enter name of the plant"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="plant_input"
        />
        <input
          type="text"
          placeholder="Enter category of the plant"
          value={cateogary}
          onChange={(e) => setCateogary(e.target.value)}
          className="plant_input"
        />
        <input
          type="number"
          placeholder="Enter price of the plant"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="plant_input"
        />
        <input
          type="number"
          placeholder="Enter height of the plant"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="plant_input"
        />
        <input
          type="text"
          placeholder="Enter color of the plant"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="plant_input"
        />
        <img src={image} alt="Plant" className="plant_img" />
        <input
          type="text"
          placeholder="Enter image URL of the plant"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="plant_input"
        />
        <button type="button" className="btn" onClick={addPlant}>
          Add Plant
        </button>
        <div className="plant_input">
          <Link to="/" className="title">
            Show all plants
          </Link>
        </div>
      </form>

      <Toaster />
    </div>
  );
}

export default AddPlant;


