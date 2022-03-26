import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    
    const { id } = useParams();
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.put(`http://localhost:8000/api/product/${id}`,{
            title,
            price,
            description
        })
            .then(result => {
                console.log(result);
                console.log(result.body);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((oneProd) => {
                console.log(oneProd)
                console.log(oneProd.data.product)
                setTitle(oneProd.data.product.title);
                setDescription(oneProd.data.product.description);
                setPrice(oneProd.data.product.price);
            })
            .catch(err => console.log(err));
    },[])

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
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default UpdateProduct;