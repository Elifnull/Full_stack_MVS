import './App.css';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import MainView from './view/MainView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainView/>}/>
          <Route path='/product/:id' element={<OneProduct/>} />
          <Route path='/product/update/:id' element={<UpdateProduct/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
