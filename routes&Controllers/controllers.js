const Faculty = require("../service")
const facultController = {
get : async function(req,res){
        try
                {
                
                
                let result = await Faculty.find(req.params.id);
               return res.status(200).json({data:result });}
               catch(err){
                   return res.status(400).json({message:'Somehing went wrong',error:err})
               }
            },
    create : async function(req,res){
try
        {
        let obj = req.body;
        let FacultyObject = new Faculty(obj);
        let result = await FacultyObject.save()
       return res.status(200).json({ message: 'Success!',data:result });}
       catch(err){
           console.log(err)
           return res.status(400).json({message:'Somehing went wrong',error:err})
       }
    },
    update : async function(req,res){
        try
                {
                let result = await Faculty.update(req.params.id,req.body)
               return res.status(200).json({ message: 'Success!',data:result });}
               catch(err){
                   return res.status(400).json({message:'Somehing went wrong',error:err})
               }
            },
    delete : async function(req,res){
        try
        {
                let result = await Faculty.remove(req.params.id);
               return res.status(200).json({message:result });}
               catch(err){
                   return res.status(400).json({message:'Somehing went wrong',error:err})
               }
            }

}
module.exports = facultController

let sampledataSet = {
    name:'muhammadanasikram2',
    email:'anasikram501@gmail',
    gender:'male',
    course_code:'BSE-23',
    phone_number:['03064279094'],
    address:{
        street_address:'895 Nasheman-e-iqbal',
        city:'Lahore',
        country:'Pakistan'
    }
}