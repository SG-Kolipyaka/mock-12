const mongoose =require("mongoose")


const JobSchema=mongoose.Schema({
    postedAt:{type:String,require:true},
    name :{type:String,require:true},
    location :{type:String,require:true},
    role :{type:String,require:true},
    level :{type:String,require:true},
    position :{type:String,require:true},
    city :{type:String,require:true},
    language :{type:String,require:true},
    contract :{type:String,enum:["full time", "part time"],require:true},
},{
    versionKey:false
})





const JobModel=mongoose.model("job",JobSchema)

module.exports={
    JobModel
}