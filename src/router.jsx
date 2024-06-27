import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import MainComponent from "./components/pages/home/main";
import Registrate from "./others/Registrate";
import ScrollToTop from "./scrollToTop";
import CartComponent from "./cart/cart";
import MotorCartCompontent from "./cart/motorCart";
import CaravanCartComponent from "./cart/caravanCart";
import TuningCartComponent from "./cart/tuningCart";
import UsedCarCartComponent from "./cart/usedCar";

const RouterComponent = () => {
    const location = useLocation();
    const hideComponent = location.pathname !== "/registrate";
    return (
        <div>
            {hideComponent && <Navbar />}
            <ScrollToTop />
            
            <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/motor" element={<Motor />} />
                <Route path="/motor/:id" element={<DetailsComponent />} />
                <Route
                    path="/caravan/:id"
                    element={<CaravanCarinfoComponent />}
                />
                <Route path="/tuning" element={<TuningComponents />} />
                <Route path="tuning/:id" element={<TuningCarinfoComponent />} />
                <Route path="/used-car/:id" element={<UsedCarCarinfo />} />
                <Route path="/caravan" element={<CaravanComponent />} />
                <Route path="/used-car" element={<UsedCarComponent />} />
                <Route
                    path="/camping-place"
                    element={<CampingPlaceComponents />}
                />
                <Route
                    path="/camping-place/:id"
                    element={<CampingPlaceCarinfo />}
                />
                <Route path="/registrate" element={<Registrate />} />
                <Route path="/cart" element={<CartComponent />} />

                <Route path="/MotorCart/:id" element={<MotorCartCompontent />} />
                <Route path="/caravanCart/:id" element={<CaravanCartComponent />} />
                <Route path="/tuningCart/:id" element={<TuningCartComponent />} />
                <Route path="/used-car/cart/:id" element={<UsedCarCartComponent />} />
            </Routes>

            {hideComponent && <Footer />}
        </div>
    );
};

export default RouterComponent;
