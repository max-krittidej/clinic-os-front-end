import "../styles.css";
import {useLocation} from "react-router"
import { useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Patient() {
  const {state}=useLocation();
  return (
    <div className="App">
      Patient
      {state?.email}
      {state?.name}
      <img src ={state?.photo} width = "500px" />
    </div>
  );
}
