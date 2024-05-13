var mongoose=require('mongoose')

var Schema=mongoose.Schema;

async function mongooconnect(){
var  skillSchema=new Schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema=new Schema({
    jobseekerName:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]

})

//js - jobseeker
var js=mongoose.model('jobseeker',jobSeekerSchema);
mongoose.connect("mongodb://127.0.0.1:27017/aspire");
 
 var jobseeker1=new js({
    jobseekerName:"Raj",
    age:22,
    emailId:"raj@test.com",
    certified:true,
    skills:[{skillName:"java",experience:1,proficiency:"beginner"},
        {skillName:"angular",experience:2,proficiency:"intermediate"}
    ]

    })

jobseeker1.save();


const updateresult=await js.findOneAndUpdate({jobseekerName:"Raj"},{age:37},{new:true});
//experience:{$lte:3}
//"skills.experience":{$lte:2}
const result =await js.find({"skills.experience":{$lte:2}});
result.map(record=>console.log(record))

}
mongooconnect()