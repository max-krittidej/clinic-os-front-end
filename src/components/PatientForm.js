import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";


function PatientForm() {
  const [Patient,setPatient] = useState({})
  const [Name,setName]=useState("")
  const [Email,setEmail]=useState("")
  const [PhoneNo,setPhoneNo]=useState("")
  const [Year,setYear]=useState("")
  const [Month, setMonth]=useState("")
  const [Day, setDay]=useState("")
  const navigate= useNavigate()
  const baseUrl = "http://127.0.0.1:8080";
  const[post,setPost]=React.useState(null);
  function range(start,end){
    const ans =[]
  for (let i = start;i<=end;i++){
    ans.push(i);
  }
  return ans
  }
  const years =range(1990,2024)
  const months = range(1,12)
  const days = range(1,31)
  const EmailChange = (event)=>{

    setEmail(event.target.value)
  }
  const NameChange =(event)=>{
    setName(event.target.value)
  }
  const PhoneChange =(event)=>{
    setPhoneNo(event.target.value)
  }
  const YearChange =(event)=>{
    setYear(event.target.value)
  
  }
  function createPost(){
    axios.post(baseUrl+"/create_patient", {email:Email,name:Name,PhoneNo:PhoneNo}).then((response)=>{
        setPost(response.data)
    });
  }
  const submitHandler =(event)=>{
    event.preventDefault();
  createPost()
  navigate("/patientInfo",{state:{email:Email,name:Name,phoneNo:PhoneNo}});
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
      <Form.Group className="mb-3" controlId="Phone NO."
      >
      <Form.Select aria-label="Default select example" value = {Year} onChange = {YearChange}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select >

    </Form.Group >
 
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default PatientForm;
