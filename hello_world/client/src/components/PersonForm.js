import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {//axios is an async function
            firstName,
            lastName
        })
            .then(result => {
                console.log(result.body);
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //         .then(success=>setMessage(success.data.message))
    //         .catch(er=>console.log(er))
    // }, []);

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>
                    First Name:
                    </label>
                    <input type="text" onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>
                    Last Name:
                    </label>
                    <input type="text" onChange={(e)=> setLastName(e.target.value)} />
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PersonForm;