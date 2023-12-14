import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Login(){


    const [cookies,setCookie,removeCookie] = useCookies(["login_new"]);
    const [Patient, setPatient] = useState({})
    const[post,setPost]=React.useState(null);
    
    const handleSetCookie=()=>{
        login = {
            "is_logged": True,
            "expiry": None,
            "token": None,
            "role": None
        }

        jsonLogin = JSON.stringify()
        setCookie("login_new","yes",{path:"/"})
    }
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPatient((values) => ({
      ...values, [name]: value
    }))
  }
    function createPost() {
        const baseUrl = "http://127.0.0.1:8080";
    axios.post(baseUrl + "/check_account", { username: Patient.username, password: Patient.password}).then((response) => {
      setPost(response.data)
    });
  }
   const submitHandler = (event) => {
    event.preventDefault();
    createPost()
    if (post==true){
    navigate("/");
    }
    setPatient({})
  }

    return (
<Container>
      <Form onSubmit={submitHandler}>
        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="username" value={Patient.name || ""} onChange={handleChange} required />
        </Form.Group>   
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="email" name="password" placeholder="Password" value={Patient.password || ""} onChange={handleChange} required />
        </Form.Group>
    
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
    )
}
