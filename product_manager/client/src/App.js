import './App.css';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AllProducts from "./components/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductForm/>}/>
          <Route path="/products" element={<AllProducts/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
