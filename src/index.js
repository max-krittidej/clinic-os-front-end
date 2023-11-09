import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/Home";
import Patient from "./components/App.js"
import Get from "./components/fakeGet.js"
import PatientForm from "./components/PatientForm.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav_bar from "./components/Layout.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
  // required for forms
  // change names of files pls my brain hurts
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Nav_bar />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/patient" element={<Patient />}></Route>
          <Route path="/patientForm" element={<PatientForm/>}></Route>
          <Route path="/fakeGet" element={<Get/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
