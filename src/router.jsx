import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Motor from "./components/pages/motors/motor";
import DetailsComponent from "./components/pages/motors/motorInfo";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import CaravanComponent from "./components/pages/caravan/caravan";
import UsedCarComponent from "./components/pages/used-car/usedCar";
import CampingPlaceComponents from "./components/pages/campingPlace/campingPlace";
import CaravanCarinfoComponent from "./components/pages/caravan/caravanCarinfo";
import TuningCarinfoComponent from "./components/pages/tuning/tuningCarinfo";
import TuningComponents from "./components/pages/tuning/tuning";
import UsedCarCarinfo from "./components/pages/used-car/usedCarCarinfo";
import CampingPlaceCarinfo from "./components/pages/campingPlace/CampingPlaceCarinfo";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/motor" element={<Motor />} />
        <Route path="/motor/:id" element={<DetailsComponent />} />
        <Route path="/caravan/:id" element={<CaravanCarinfoComponent />} />
        <Route path="/tuning" element={<TuningComponents />} />
        <Route path="tuning/:id" element={<TuningCarinfoComponent />} />
        <Route path="/usedCar/:id" element={<UsedCarCarinfo />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/used-car" element={<UsedCarComponent />} />
        <Route path="/camping-place" element={<CampingPlaceComponents />} />
        <Route path="/camping-place/:id" element={<CampingPlaceCarinfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterComponent;
