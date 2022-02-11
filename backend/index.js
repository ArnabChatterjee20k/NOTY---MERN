const express = require("express")
const connect_To_Mongo = require("./db")

connect_To_Mongo()
    .then(() => { console.log(`connected successfully`) })
    .catch(() => { console.log("error") })

const app = express()
const port = 3000

// Available Routes
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

// app will start listening first then mongo db connected as js is asynchronous
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})