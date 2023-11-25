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
  change names of files pls my brain hurts
  put all the states in patient form into one state
  phone number type change 
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
