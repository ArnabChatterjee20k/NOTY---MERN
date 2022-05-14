import Home from "./Home";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

/** A encapsulation */
function Protected_home() {
    // before mounting only getting the token. Simulating a component will mount effect.
    const[token , setToken] = useState(localStorage.getItem("noty__auth__token"))

    useEffect(()=>{
        // we cant set the token after mounting as from the beginning token is null so before mounting it will get redirected to login page.
        // to understand it see the previous commit where it is explained using lifecycle methods.
        // console.log(token)
        // setToken(localStorage.getItem("noty__auth__token")) 
        // console.log("token fetched",token)

        // toasting notification
        token?toast("Welcome"):toast.error("Please login to continue..!",{theme:"colored"})
    },[])


    if(!token){
        return <Redirect to={{pathname:"/"}}/>
    }
    return <Home/>
}

export default Protected_home