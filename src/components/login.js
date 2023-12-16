import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import moment from 'moment';

export default function Login(){



    const [cookies,setCookie,removeCookie] = useCookies(["login_new"]);
    const [Patient, setPatient] = useState({})
    const handleSetCookie=()=>{
        
    }
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPatient((values) => ({
      ...values, [name]: value
    }))
  }
    function createPost() {
    axios.post(baseUrl + "/create_patient", { email: Patient.email, name: Patient.name, phoneNo: Patient.phoneNo }).then((response) => {
      setPost(response.data)
    });
  }
  const navigate = useNavigate()
   const submitHandler = (event) => {
    event.preventDefault();
    // createPost()
    // setPatient({})
    var login = {
        "is_logged": true,
        "expiry": moment().add(1,"h"),
        "token": null,
        "role": null
    }
    setCookie("login",login,{path:"/"})
    navigate("/patientForm" )
  }

    return (
<Container>
      <Form onSubmit={submitHandler}>
        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="username" value={Patient.username || ""} onChange={handleChange} required />
        </Form.Group>   
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={Patient.password || ""} onChange={handleChange} required />
        </Form.Group>
    
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
    
}
