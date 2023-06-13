const {JobModel}=require("../Models/job.model")

const {Router}=require("express")

const jobRouter=Router()


jobRouter.post("/add",async(req,res)=>{
    try{
        const job =new JobModel(req.body)
        await job.save()
        res.status(200).send({"msg":"Job Posted Successfully"})

    }catch(er){
        res.status(400).send({"msg":er.message})
    }
})

jobRouter.get("/",async(req,res)=>{
    try{
        let {page,limit,language,sort,role}=req.query;

        let skip;
let searched;
let sorted;
let role1;

if(page && limit)
{
 skip=((page-1)*limit);
}else{
 page=1;
 limit=100;
 skip=0;
}


if(language)
{
 searched= { };
}else{
 searched={};

}


if(sort=="asc")
{
    sorted={postedA:1}
}else{
    sorted={postedA:-1}
}


if(role)
{
 role1={role:role}
}else{
 role1={}
}
if(skip<0)
{
 skip=0;
}

let data= await JobModel.find({$and: [role1]}).sort(sorted).skip(skip).limit(limit);
       if(language)
       {
        let filtered=data.filter((item,index)=>{
            return (item.language.toLowerCase().includes(language.toLocaleLowerCase()));
        });
        res.send(filtered);
       }else{
        res.send(data);
       }


    }catch(er){
        res.status(400).send({"msg":er.message})
    }
})







module.exports={
    jobRouter
}
