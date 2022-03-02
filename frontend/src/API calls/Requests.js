// This function will act as a basic schema provider. Rest functions will take data and add rest data in top of that.
function server_data_provider(method,authtoken){
    const host = "http://localhost:5000/";
    const headers = {
        "method" : method,
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
    const server_info = server_data_provider("GET","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwZmJkMzFjODYzOGJmNDA4YTM5ODVjIn0sImlhdCI6MTY0NTE5ODY4N30.EqoguNjqB_1-Ed6eweXsXuji-05GCHV-j9ekpW9oEXQ")
    const host = server_info.host
    const headers = server_info.headers
    // Fetching notes using get
    const endpoint = "api/notes/fetchallnotes"
    const url = host + endpoint

    const notes = await fetch(url,{headers,mode:"cors"})
    const response = await notes.json()
    return response
}

export async function PUT_API_CALL(id,authtoken,body){
    const server_info = server_data_provider("PUT",authtoken)
    server_info.headers.body = JSON.stringify(body)

    const host = server_info.host
    const header = server_info.headers

    // fetch function
    const endpoint = `api/notes/updatenote/${id}`
    const url = host+endpoint
    const put_data = await fetch(url,header)
    
    return put_data.json()
}