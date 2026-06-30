import { Routes, Route } from "react-router-dom";
 
import Layout from "./Pages/LayOut";
 
import Home from "./Pages/Home";

import Cars from "./Pages/Cars";

import About from "./Pages/About";

import Contact from "./Pages/Contact";

import Wishlist from "./Pages/Wishlist";

import Login from "./Pages/Login";

import CarDetails from "./Pages/CarDetails";

import Dashboard from "./Pages/Dashboard/Dashboard";


import Profile from "./Pages/Dashboard/Profile";

import TestDrives from "./Pages/Dashboard/TestDrives";

import Settings from "./Pages/Dashboard/Settings";
 
function App() {
 
  return (
 
    <Routes>
 
      <Route path="/" element={<Layout />}>
 
    <Route index element={<Home />} />
 
    <Route path="cars" element={<Cars />} />
 
    <Route path="cars/:id" element={<CarDetails />} />
 
    <Route path="about" element={<About />} />
 
    <Route path="contact" element={<Contact />} />
 
    <Route path="wishlist" element={<Wishlist />} />
 
    <Route path="login" element={<Login />} />

    <Route path="dashboard" element={<Dashboard />}>
 
    <Route index element={<Profile />} />
 
    <Route path="profile" element={<Profile />} />
 
    <Route path="test-drives" element={<TestDrives />} />
 
    <Route path="settings" element={<Settings />} />
 
</Route>
 
</Route>
 
    </Routes>
 
  );
 
}
 
export default App;
 
