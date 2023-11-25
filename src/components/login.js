import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Login(){


    const [cookies,setCookie,removeCookie] = useCookies(["login_new"]);


    const handleSetCookie=()=>{
        login = {
            "is_logged": True,
            "expiry": None,
            "token": None,
            "role": None
        }

        jsonLogin = JSON.stringify()
        setCookie("login_new","yes",{path:"/"})
    }
    console.log(cookies)
    if (cookies != {} || cookies != null) {
            cookiesDict = JSON.parse(cookies)
            console.log(cookiesDict)
    }
    
    return (
        <div className = 'login'>
            <Button onClick = {handleSetCookie}>btn</Button>
            
            <h1>{cookies.patient}</h1>
        </div>
    )
}