const auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZmJkMzFjODYzOGJmNDA4YTM5ODVjIn0sImlhdCI6MTY0NTE5ODY4N30.EqoguNjqB_1-Ed6eweXsXuji-05GCHV-j9ekpW9oEXQ"

// This function will act as a basic schema provider. Rest functions will take data and add rest data in top of that.
function server_data_provider(authtoken){
    const host = "http://localhost:5000/";
    const headers = {
        "Content-Type" : "application/json" , 
        "auth-token": authtoken
    };
    return {host,headers}
}
/**
 * GET data to view the notes initially
 * POST request to add new data
 * PUT request to update the existing data
 * DELETE request to deelete the existing data from the server
 */


export async function GET_API_CALL(){
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
    const server_info = server_data_provider(auth_token)
    const headers = server_info.headers
    const host = server_info.host

    const endpoint = "api/notes/deletenote/"+id
    const url = host+endpoint

    const response = await fetch(url,{headers:headers,method:"DELETE"})
    return response.json()
}

export async function LOGIN_API_CALL(body){
    const server_info = server_data_provider(auth_token)

    const host = server_info.host
    const headers = server_info.headers

    // fetch function
    const endpoint = `api/notes/updatenote/${id}`
    const url = host+endpoint

    const jsonified_body = JSON.stringify(body);
    const post_data = await fetch(url,{headers:headers,method:"POST",body:jsonified_body})
    return post_data.json()
}