import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormRange from "react-bootstrap/esm/FormRange";


function PatientForm() {

  const [Patient, setPatient] = useState({})
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [PhoneNo, setPhoneNo] = useState("")
  const [Year, setYear] = useState("")
  const [Month, setMonth] = useState("")
  const [Day, setDay] = useState("")
  const navigate = useNavigate()
  const baseUrl = "http://127.0.0.1:8080";
  const [post, setPost] = React.useState(null);
  function range(start, end) {
    const ans = []
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPatient((values) => ({
      ...values, [name]: value
    }))
  }
  var years = range(1990, 2024)
  years = years.map((i) => {
    return <option value={i} > {i} </option>
  })
  const months = range(1, 12)
  const days = range(1, 31)
  const EmailChange = (event) => {

    setEmail(event.target.value)
  }
  const NameChange = (event) => {
    setName(event.target.value)
  }
  const PhoneChange = (event) => {
    setPhoneNo(event.target.value)
  }
  const YearChange = (event) => {
    setYear(event.target.value)

  }
  function createPost() {
    axios.post(baseUrl + "/create_patient", { email: Email, name: Name, PhoneNo: PhoneNo }).then((response) => {
      setPost(response.data)
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    createPost()
    navigate("/patientInfo", { state: { email: Email, name: Name, phoneNo: PhoneNo } });
    setEmail("")
    setName("")
    setPhoneNo("")
  }


  return (
    <Container>
      <Form onSubmit={submitHandler}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={Patient.email || ""} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="text" value={Patient.name || ""} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>PhoneNo</Form.Label>
          <Form.Control type="number" name="phoneNo" placeholder="phoneNo" value={Patient.phoneNo} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>Year</Form.Label>
          <Form.Select aria-label="Default select example" name="year" value={Patient.year} onChange={YearChange}>
            <option>Open this select menu</option>
            {years}
          </Form.Select >

          <Form.Label>Gender</Form.Label>
          <Form.Check type="radio" label="Male" name="gender" value = "male" checked={Patient.gender === "male"}onChange={handleChange}/>
          <Form.Check type="radio" label="Female" name="gender" value = "female" checked={Patient.gender === "female"}onChange={handleChange}/>
        </ Form.Group >

        
        
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PatientForm;
