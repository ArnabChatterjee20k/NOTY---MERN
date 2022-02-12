const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/Noty";
async function connect_To_Mongo() {
    await mongoose.connect(mongoURI)
}

module.exports = connect_To_Mongo