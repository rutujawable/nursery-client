import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';



import { RouterProvider, createBrowserRouter } from "react-router-dom";
            const root = ReactDOM.createRoot(document.getElementById("root"));

            const router =createBrowserRouter([
                {
                    path:"/",
                    element:<Home/>
                }
               
              ])

            root.render(
              <div>
            <RouterProvider router={router} />
            
            </div> )            