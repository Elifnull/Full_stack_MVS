import {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const[button, setbutton] = useState(true);
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    setbutton(true)
  },[])


  return (
    <Card className="col-4 p-4 mx-auto my-3">
      <h3>the count: {count}</h3>
      {button?
      <Button onClick={()=>{setCount(count+1); setButton(!button)}} >Count +1</Button>:
      <Button disabled>Count +1</Button>
      }
      <Button className="btn-danger my-3" onClick={()=>setbutton(true)}>Enable</Button>
    </Card>
  );
}

export default App;
