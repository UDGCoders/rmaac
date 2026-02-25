const express = require('express')
const app = express()
const noteModel = require('../models/note.model')
app.use(express.json());

app.post("/notes",async (req,res)=>{
    const data=req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"notes added to db"
    })
})

app.get("/notes",async (req,res)=>{
/* 
    find() isused for return a multiple objects and if null it returns an empty array
    findOne() is used to return the single object from whole and also can be used to find one object from data 
        it returns null if data dont exist
     */
    const notes =  await noteModel.find()
    res.status(200).json({
        notes:notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"Deleted Successfully"
    })

})

app.patch("/notes/:id",async (req,res)=>{
    const data = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({
        _id:id   
    },{
        description:description
    })
})

module.exports=app