import React, { useState, useEffect } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    const { id } = useParams();//don't forget that params is a function!!!
    const [objProduct, setObjProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data.product);
                setObjProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(deletion =>{
            console.log(deletion);
            navigate("/products")
        })
        .catch((err)=> console.log(err));
    }

    return (
        <div>
            <header>
                <Link to={"/products"}>View All Products</Link>
            </header>
            <h2>{objProduct.title}</h2>
            <p>Price: ${objProduct.price}</p>
            <p>Description: {objProduct.description}</p>
            <button onClick={deleteHandler}>Delete Product</button>
        </div>
    );
};

export default OneProduct;