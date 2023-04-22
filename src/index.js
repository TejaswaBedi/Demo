import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile1 from "./pages/Profile/Profile1/Profile1";
import Dummy from "./Dummy";
import Profile2 from "./pages/Profile/Profile2/Profile2";
import Profile3 from "./pages/Profile/Profile3/Profile3";
import Profile4 from "./pages/Profile/Profile4/Profile4";
import Profile5 from "./pages/Profile/Profile5/Profile5";
import Profile6 from "./pages/Profile/Profile6/Profile6";
import Profile7 from "./pages/Profile/Profile7/Profile7";
import Profile8 from "./pages/Profile/Profile8/Profile8";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');
</style>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile1" element={<Profile1 />} />
      <Route path="/profile2" element={<Profile2 />} />
      <Route path="/profile3" element={<Profile3 />} />
      <Route path="/profile4" element={<Profile4 />} />
      <Route path="/profile5" element={<Profile5 />} />
      <Route path="/profile6" element={<Profile6 />} />
      <Route path="/profile7" element={<Profile7 />} />
      <Route path="/profile8" element={<Profile8 />} />
      <Route path="/dummy" element={<Dummy />} />
    </Routes>
  </BrowserRouter>
);
