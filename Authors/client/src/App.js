import React, {useState } from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Authorform from './components/form';
import AllAuthors from "./components/AllAuthors";

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllAuthors/>}/>
          <Route path="/create" element={<Authorform/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
