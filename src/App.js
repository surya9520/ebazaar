import CategoryFilter from "./components/CategoryFilter";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
