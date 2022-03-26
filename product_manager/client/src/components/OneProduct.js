import React, { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    const { id } = useParams();
    const [objProduct, setObjProduct] = useState({});

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

    return (
        <div>
            <header>
                <Link to={"/products"}>View All Products</Link>
            </header>
            <h2>{objProduct.title}</h2>
            <p>Price: ${objProduct.price}</p>
            <p>Description: {objProduct.description}</p>
        </div>
    );
};

export default OneProduct;