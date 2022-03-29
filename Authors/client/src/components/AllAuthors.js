import React, {useState, useEffect } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AllAuthors = (props) => {
    const[authorList, setAuthorList] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
            .then(response => {
                console.log(response.data)
                setAuthorList(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])

    return(
        <Card className="mx-auto my-4 p-4">
            {
                authorList.map((author,index)=>(
                    <p>{author.name}</p>
                ))
            }
        </Card>
    )
}

export default AllAuthors;