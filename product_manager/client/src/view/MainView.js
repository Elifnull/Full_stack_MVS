import React, {useState} from "react";
import AllProducts from "../components/AllProducts";
import ProductForm from "../components/ProductForm";

const MainView =(props) =>{
    const [productArray, setProductArray] = useState([]);

    return(
        <div>
            <ProductForm productArray={productArray} setProductArray={setProductArray}/>
            <br/>
            <AllProducts productArray={productArray} setProductArray={setProductArray} />
        </div>
    )
}

export default MainView;