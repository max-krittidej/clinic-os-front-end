import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/Home.js";
import Patient from "./components/PatientInfo.js"
import Get from "./components/fakeGet.js"
import PatientForm from "./components/PatientForm.js"
import Login from "./components/login.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav_bar from "./components/Layout.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
  /* required for forms just write required bro
  phone number type change 
  complete login and login check
  photo filefield second and third
  patient info get from database and not from use navigate
  moment js for datetime in cookies
  payment
  search
  */




  
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Nav_bar />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/patientInfo" element={<Patient />}></Route>
          <Route path="/patientForm" element={<PatientForm/>}></Route>
          <Route path="/fakeGet" element={<Get/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
