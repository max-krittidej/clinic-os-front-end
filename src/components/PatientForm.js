import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormRange from "react-bootstrap/esm/FormRange";


function PatientForm() {

  const [Patient, setPatient] = useState({})
  const [File, setFile]=useState({})
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
  const handleFile = (event) => {
    const name = event.target.name;
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function() {
      var based64data = reader.result;
      setFile((values) => ({
        ...values, [name]: based64data
      }))
    }

    // setFile((values) => ({
    //   ...values, [name]: 
    // }))
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
 

  
  function createPost() {
    axios.post(baseUrl + "/create_patient", { email: Patient.email, name: Patient.name, phoneNo: Patient.phoneNo }).then((response) => {
      setPost(response.data)
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    createPost()
    console.log(Patient)
    console.log(File)
    navigate("/patientInfo", { state: { email: Patient.email, name: Patient.name, phoneNo: Patient.phoneNo ,photo:File.photo} });
    setPatient({})
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
          <Form.Control type="text" name="name" placeholder="text" value={Patient.name || ""} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>PhoneNo</Form.Label>
          <Form.Control type="number" name="phoneNo" placeholder="phoneNo" value={Patient.phoneNo} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>Year</Form.Label>
          <Form.Select aria-label="Default select example" name="year" value={Patient.year} onChange={handleChange} required>
            <option>Open this select menu</option>
            {years}
          </Form.Select >

          <Form.Label>Sex</Form.Label>
          <Form.Check type="radio" label="Male" name="gender" value = "male" checked={Patient.gender === "male"}onChange={handleChange} />
          <Form.Check type="radio" label="Female" name="gender" value = "female" checked={Patient.gender === "female"}onChange={handleChange}/>
        </ Form.Group >

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" name="photo1"  onChange={handleFile}/>
      </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" name="photo2"  onChange={handleFile}/>
      </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" name="photo3"  onChange={handleFile}/>
      </Form.Group>
            
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PatientForm;
