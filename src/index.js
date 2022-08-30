import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Riddle2 from "./Pages/Riddle2";
import Riddle3 from "./Pages/Riddle3";
import Riddle4 from "./Pages/Riddle4";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Riddle2" element={<Riddle2 />} />
          <Route path="Riddle3" element={<Riddle3 />} />
          <Route path="Riddle4" element={<Riddle4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);