import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Login(){
    const [cookies,setCookie,removeCookie] = useCookies(["login"]);
    const handleSetCookie=()=>{
        
        
        setCookie("login","yes",{path:"/"})
        
    }
    

    return (
        <div className = 'login'>
       
            <Button onClick = {handleSetCookie}>btn</Button>
            
            <h1>{cookies.patient}</h1>
        </div>
    )
}