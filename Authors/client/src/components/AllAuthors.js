import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AllAuthors = (props) => {
    const[anArray, setAnArray] = useState([]); //this was set as an object not an array.....
    const navigate = useNavigate();
    const [sort, setSort] = useState(false);

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(response => {
                console.log(response)
                const filterArray = anArray.filter((author)=> (author._id !== id));
                setAnArray(filterArray);
            })
            .catch(error => console.log(error));
    }
    const sortedArray = anArray.sort(function(a, b) {
        const first = a.name.toUpperCase(); 
        const second = b.name.toUpperCase();
        if (first < second) {
            return -1;
        }
        if (first > second) {
            return 1;
        }
        return 0;
    });

    const sortHandler = () => {
        return(setSort(!sort))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
            .then(response => {
                console.log(response.data)
                if (sort === true){
                    setAnArray(sortedArray())
                }else{
                setAnArray(response.data)}
            })
            .catch(error=>{
                console.log(error)
            })
    },[sort])

    return(
        <Card className="mx-auto col-8">
            <Link to="/create">Create Author</Link>
            <button className="btn btn-success mx-4" onClick={()=> sortHandler()}>Sort</button>
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
                                <button className="btn btn-danger mx-2" onClick={() => deleteHandler(author._id)}>Delete</button>
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