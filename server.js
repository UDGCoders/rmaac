const app = require('./src/app/app')
const connectDB = require('./src/db/db')
// const noteModel = require('./src/models/note.model')
connectDB()
app.get("/",(req,res)=>{
    res.status(400).json({
        message:"cant read  data from here"
    })
})
app.post("/",(req,res)=>{
    res.status(403).json({
        message:"dont have permisiion to write here received"
    })
})
app.patch("/:index",(req,res)=>{
    res.json({
        message:"Not updating anything rightnow"
    })
})



app.listen("5000",()=>{
    console.log("app is connected")
})