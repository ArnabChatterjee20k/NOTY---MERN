const express = require("express")
const connect_To_Mongo = require("./db")

connect_To_Mongo()
    .then(() => { console.log(`connected successfully`) })
    .catch(() => { console.log("error") })

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app will start listening first then mongo db connected as js is asynchronous
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})