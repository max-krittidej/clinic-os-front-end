import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";


function PatientForm() {
  const [Name,setName]=useState("")
  const [Email,setEmail]=useState("")
  const [PhoneNo,setPhoneNo]=useState("")
  const baseUrl = "http://127.0.0.1:8080";
  const[post,setPost]=React.useState(null);
  const EmailChange = (event)=>{
    setEmail(event.target.value)
  }
  const NameChange =(event)=>{
    setName(event.target.value)
  }
  const PhoneChange =(event)=>{
    setPhoneNo(event.target.value)
  }
  function createPost(){
    axios.post(baseUrl+"/create_patient", {email:Email,name:Name,PhoneNo:PhoneNo}).then((response)=>{
        setPost(response.data)
    });
  }
  const submitHandler =(event)=>{
    event.preventDefault();
 createPost()
      setEmail("")
    setName("")
    setPhoneNo("")
  }
  
  return (
    <Container>
    <Form onSubmit={submitHandler}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail"
        >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value= {Email} onChange={EmailChange}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName"
      >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="text" value = {Name} onChange={NameChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Phone NO."
      >
        <Form.Label>PhoneNo</Form.Label>
        <Form.Control type="number" placeholder="" value = {PhoneNo} onChange={PhoneChange}/>
      </Form.Group>
 
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default PatientForm;
