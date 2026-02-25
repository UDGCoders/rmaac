const app = require('./src/app/app')
const connectDB = require('./src/db/db')

connectDB()

// app.listen("5000",()=>{
//     console.log("app is connected")
// })