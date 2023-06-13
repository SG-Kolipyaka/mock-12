const {connection}=require("./db")
const express=require("express")
const cors = require('cors')
require('dotenv').config()
const {jobRouter}=require("./Router/job.router")
const app=express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("HOME ROUTE")
})

app.use("/jobs",jobRouter)


app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log("connected to DB")
    }catch(er){
console.log(er)
    }
    console.log(`server is running at ${process.env.PORT}`)
})

