import Home from "./Home";
import { Redirect } from "react-router-dom";

import { Component } from "react";

export default class Protected_home extends Component{
    constructor(){
        super()
        this.state = ({
            token:null,
            auth:false
        })
    }
    componentWillMount(){
        this.setState({...this.state,token:localStorage.getItem("noty__auth__token")})
        console.log("will mount over. Current state",this.state)
        // this will show me the state before mounting of the component means everything will be null.
        // here we are 
    }
    componentDidMount(){
        if(this.state.token){
            this.setState({auth:true})
        }
        console.log("did mount over. Current state",this.state)
        // it will be going to show me the changes after mounting of the component means here it will show me the state after mounting. Since we are changing auth after mounting so it will considered as a update
    }
    componentDidUpdate(){
        console.log("Update happend",this.state)
        // here it will show the state of the component when their will be a update after mounting.
    }

    //  TODO: we are using token to identify the lifecycle. no use of auth as it is getting tracked in the update cycle and getting set in the did mount.
    /**
     * 
     * Logs to explain the things (token is present in the local storage)
     * will mount over. Current state {token: null, auth: false}
     * did mount over. Current state {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…gwMX0.thWhsdFSWmtG9G6yScGxabl3DJyPjO7N0LnPmbEb9zY', auth: false}
     * Update happend {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…gwMX0.thWhsdFSWmtG9G6yScGxabl3DJyPjO7N0LnPmbEb9zY', auth: true}
     */

    /**
     * Logs to explain the things (token is not present in the local storage)
     * will mount over. Current state {token: null, auth: false}
     * did mount over. Current state {token: null, auth: false}
     */
    render(){
        if(this.state.token){
            return <Home />
        }
        return <Redirect to={{pathname:"/"}}/>
    }
}