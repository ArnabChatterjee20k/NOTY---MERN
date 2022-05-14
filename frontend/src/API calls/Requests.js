import { toast } from "react-toastify";

// This function will act as a basic schema provider. Rest functions will take data and add rest data in top of that.
function server_data_provider(authtoken){
    const host = "http://localhost:5000/";
    const headers = {
        "Content-Type" : "application/json" , 
    };
    // if authtoken is passed into the functions then only push this into the headers
    if(authtoken){
        headers["auth-token"]=authtoken
    }
    return {host,headers}
}
/**
 * GET data to view the notes initially
 * POST request to add new data
 * PUT request to update the existing data
 * DELETE request to deelete the existing data from the server
 */


export async function GET_API_CALL(){
    let auth_token = localStorage.getItem("noty__auth__token")
    const server_info = server_data_provider(auth_token)
    const host = server_info.host
    const headers = server_info.headers
    // Fetching notes using get
    const endpoint = "api/notes/fetchallnotes"
    const url = host + endpoint

    const notes = await fetch(url,{headers,mode:"cors",method:"GET"})
    const response = await notes.json()
    return response
}

export async function POST_API_CALL({title,description,tag}){
    let auth_token = localStorage.getItem("noty__auth__token")
    const server_info = server_data_provider(auth_token)
    const endpoint = "api/notes/addnewnote"
    const host = server_info.host
    const headers = server_info.headers

    // adding body tag to the headers
    const body = JSON.stringify({title,description,tag})

    // posting the data to the server
    const url = host+endpoint
    const new_note = await fetch(url,{headers:headers,"mode":"cors",method:"POST",body:body})
    const response = await new_note.json()
    return response
}

export async function PUT_API_CALL(id,body){
    let auth_token = localStorage.getItem("noty__auth__token")
    const server_info = server_data_provider(auth_token)

    const host = server_info.host
    const headers = server_info.headers

    // fetch function
    const endpoint = `api/notes/updatenote/${id}`
    const url = host+endpoint

    const jsonified_body = JSON.stringify(body);
    const put_data = await fetch(url,{headers:headers,method:"PUT",body:jsonified_body})
    return put_data.json()
}
export async function DELETE_API_CALL(id){
    let auth_token = localStorage.getItem("noty__auth__token")
    const server_info = server_data_provider(auth_token)
    const headers = server_info.headers
    const host = server_info.host

    const endpoint = "api/notes/deletenote/"+id
    const url = host+endpoint

    const response = await fetch(url,{headers:headers,method:"DELETE"})
    return response.json()
}

export async function AUTH_API_CALL(body){
    let auth_token = localStorage.getItem("noty__auth__token")
    const server_info = server_data_provider(auth_token)

    const host = server_info.host
    const headers = server_info.headers

    // fetch function
    const endpoint = `api/auth/loginuser`
    const url = host+endpoint

    const jsonified_body = JSON.stringify(body);
    const post_data = await fetch(url,{headers:headers,method:"POST",body:jsonified_body})
    const request_condition = post_data.ok
    
    if(request_condition){
        const {authtoken} = await post_data.json()
        await localStorage.setItem("noty__auth__token",authtoken)
        toast.success("Login Successfull",{theme:"colored"})
    } else{
        toast.error("Error occured!",{theme:"colored"})
    }
    return request_condition
}

export async function CREATE_USER_API_CALL(body){
    const server_info = server_data_provider()

    const host = server_info.host
    const headers = server_info.headers

    // fetch function
    const endpoint = `api/auth/createuser`
    const url = host+endpoint

    const jsonified_body = JSON.stringify(body);
    const post_data = await fetch(url,{headers:headers,method:"POST",body:jsonified_body})
    const request_condition = post_data.ok
    if(request_condition){
        const {authtoken} = await post_data.json()
        await localStorage.setItem("noty__auth__token",authtoken)
        toast.success("Registered!",{theme:"colored"})
    }
    else{
        toast.error("Error occured!",{theme:"colored"})
    }
    return request_condition
}