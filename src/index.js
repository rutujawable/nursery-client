import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import AddPlant from "./views/AddPlant/AddPlant"
import UpdatePlant from './views/UpdatePlant/UpdatePlant';




import { RouterProvider, createBrowserRouter } from "react-router-dom";
            const root = ReactDOM.createRoot(document.getElementById("root"));

            const router =createBrowserRouter([
                {
                    path:"/",
                    element:<Home/>
                },
                {
                  path:"/addplant",
                  element:<AddPlant/>
                },
                {
                  path:"/update/:id",
                  element:<UpdatePlant/>
                }
               
               
              ])

            root.render(
              <div>
            <RouterProvider router={router} />
            
            </div> )            