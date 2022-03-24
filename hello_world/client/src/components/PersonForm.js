import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    const [message, setMessage] = useState("Loading...");
    useEffect = () => {
        axios.get('https://localhost/api')
            .then((success)=> {
                setMessage(success.data.message)
            })
            .catch((err) => {
                console.log(`error: ${err}`)
            }),[]};
    return(
        <div>
            <h2>Just got this message from an axios request:{message}</h2>
        </div>
    )
}

export default PersonForm;