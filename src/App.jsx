import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
