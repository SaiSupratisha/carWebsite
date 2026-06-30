import { Routes, Route } from "react-router-dom";
 
import Layout from "./pages/Layout";
 
import Home from "./pages/Home";

import Cars from "./pages/Cars";

import About from "./pages/About";

import Contact from "./pages/Contact";

import Wishlist from "./pages/Wishlist";

import Login from "./pages/Login";

import CarDetails from "./pages/CarDetails";

import Dashboard from "./pages/dashboard/Dashboard";


import Profile from "./pages/dashboard/Profile";

import TestDrives from "./pages/dashboard/TestDrives";

import Settings from "./pages/dashboard/Settings";
 
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
 