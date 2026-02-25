const mongoose = require('mongoose')

async function connectDB() {
    mongoose.connect("mongodb+srv://gamexzone640_db_user:JSn8AHxnI767AUb8@cluster0.yz5e4p1.mongodb.net/prat")
    console.log("connected succesfully")
}

// connectDB()
module.exports = connectDB;