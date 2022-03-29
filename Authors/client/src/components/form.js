import React, {useState } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Authorform = (props) =>{
    const [name, setName] = useState('');
    const [error, setError] =useState({});
    
    const navigate = useNavigate();


    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", { name })
        .then((response) => {
            console.log(response);
            navigate("/")
        })
        .catch((error) => {
            console.log(error.response.data.errors);
            setError(error.response.data.errors);
        });
    }

    return(
        <Card className="mx-auto col-6 p-4 my-4" >
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Author Name </Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Author's Name..."/>
                    {error.name ? <Form.Text>{error.name.message}</Form.Text>:null}
                </Form.Group>
                <Button className="my-3 btn-success"type="submit">Submit</Button>
            </Form>
        </Card>
    )
}

export default Authorform;