const jwt = require("jsonwebtoken");

// not a good idea to hardcode it 
const JWT_SECRET = ";adsjfldasjfldgjlkdgfdklglkfjglueouroejrlejrlenf,dnf,"

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to the req object
    const token = req.header("auth-token"); // extracting headers from the request
    // checking existence of token
    if (!token) {
        res.status(401).send({ error: "Plz authenticate using a valid token" })
    }
    // verifying token
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; // appending user to request object
        next() // this is for calling the next middleware present in the route    
    } catch (error) {
        res.status(401).send({ error: "Plz authenticate using a valid token" })
    }
}

module.exports = fetchuser;