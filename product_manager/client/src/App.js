import './App.css';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import OneProduct from './components/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductForm/>}/>
          <Route path="/products" element={<AllProducts/>} />
          <Route path='/product/:id' element={<OneProduct/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
