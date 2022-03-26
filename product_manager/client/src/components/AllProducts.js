import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
    const [productArray, setProductArray] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(result =>{
                console.log(result);
                console.log(result.data);
                setProductArray(result.data);
            })
            .catch(err => console.log(err))
    },[])


    return(
        <div>
            <header>
                <Link to={"/"}>Create Product</Link>
            </header>
            {
                productArray.map((product,index)=>(
                    <div key={index}>
                        <p>Name of Product: <Link to={`/product/${product._id}`}>{product.title}</Link></p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <br/>!!!
                    </div>
                ))
            }
        </div>
    )

}

export default AllProducts;