
import React, { useEffect, useState } from 'react';
import PlantCard from "./../../components/PlantCard/PlantCard";
import "./Home.css";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import plus from "./plus.png";
import { Link } from 'react-router-dom';

function Home() {
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    toast.loading("Plants loading...");
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);
      setPlants(response.data.data);
      toast.dismiss();
      toast.success("Plants loaded successfully!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to load plants.");
    }
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <div className="home-container">
      <h1 className="plant">Plants</h1>

      <div className="plant-cards-container">
        {
          plants.map((plant, i) => {
            const {
              _id,
              name,
              cateogary,
              price,
              height,
              color,
              image
            } = plant;

            return (
              <PlantCard
                key={i}
                name={name}
                id={_id}
                image={image}
                cateogary={cateogary}
                price={price}
                height={height}
                color={color}
                loadPlants={loadPlants}
              />
            );
          })
        }
      </div>

      <Toaster />

      <Link to="/addplant" className="link-add-plant">
        <img src={plus} alt="Add Plant" className="img" />
      </Link>
    </div>
  );
}

export default Home;
