import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from './HomePage';
import { AboutUs, DestinationDetail, DestinationPage ,Gallery } from "./components";
import Layout from "./Layout/Layout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="about/" element={<AboutUs />} />
      <Route path="destination/" element={<DestinationPage />} />
      <Route path="destination/:id" element={<DestinationDetail  />} />
      <Route path="gallery/" element={<Gallery />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);