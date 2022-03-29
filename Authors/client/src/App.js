import React, {useState } from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Authorform from './components/form';
import DisplayAuthors from "./components/AllAuthors";
import UpdateAuthor from "./components/updateAuthor";

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAuthors/>}/>
          <Route path="/create" element={<Authorform/>}/>
          <Route path="/edit/:id" element={<UpdateAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
