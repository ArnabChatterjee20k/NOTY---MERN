import Home from "./Home";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

/** A encapsulation */
function Protected_home() {
    const[token , setToken] = useState(null)
    const [auth,setAuth] = useState(false)

    useEffect(()=>{
        setToken(localStorage.getItem("noty__auth__token")) //not working
        console.log("token fetched")
    },[])

    useEffect(()=>{
        setAuth(true) // not working
        alert(token)
    },[token])
    
    useEffect(()=>{
        alert(token)
    },[auth])


    if(!auth){
        return <Redirect to={{pathname:"/"}}/>
    }
    return <Home/>
}

export default Protected_home