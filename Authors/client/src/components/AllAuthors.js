import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AllAuthors = (props) => {
    const[anArray, setAnArray] = useState([]); //this was set as an object not an array.....
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
            .then(response => {
                console.log(response.data)
                setAnArray(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])

    return(
        <Card className="mx-auto col-8">
            <Link>Create Author</Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Functions</th>
                    </tr>
                </thead>
                <tbody>
                    {anArray.map((author, index)=> {
                    return(
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <button className="btn btn-success mx-2" onClick={()=> navigate(`/edit/${author._id}`)}>Edit</button>
                                <button className="btn btn-danger mx-2" onClick={()=> navigate(`/delete/${author._id}`)}>Delete</button>
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </Card>
    )   
}

export default AllAuthors;