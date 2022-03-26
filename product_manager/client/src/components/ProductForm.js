import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post("http://localhost:8000/api/product",{
            title,
            price,
            description
        })
            .then(result => {
                console.log(result);
                console.log(result.body);
                setTitle("");
                setDescription("");
                setPrice("");
            })
            .catch(err => console.log(err))
    }


    return(
        <div>
            <header>
                <Link to={"/products"}>View All Products</Link>
            </header>
            <br/>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.valueAsNumber)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;