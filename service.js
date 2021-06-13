const crypto = require("crypto");
const FacultySchema = require('./schema')
const { Validate,getFile,getFormattedFile,WriteToFile } = require( './util' )






 class Faculty{
   
    constructor(data,id){
            if(!id)
            this.data ={ ...data,id:crypto.randomBytes(16).toString("hex"),}
            else if(id)
            this.data ={ ...data,id:id}
            else this.data = sampledataSet

           
       
    }
    

     save = async() =>{
       return new Promise( async (resolve,reject) =>{
            let records = await getFile()
            if(!records)
            reject('Cannot Open DB file')
            let result = await Validate('email',this.data)
            console.log(result)
            if(result.length)
            reject('Email already exists')
            let id = this.data.id
            records[`${id}`] = this.data
           try{
            await WriteToFile(records)
           
            resolve( records[`${id}`] )
        }catch(err)
            {reject(new Error('Error writing to the DB'))}
          } )
    }
 static  find = async( id ) => {
        if(id)
      return new Promise( async (resolve,reject) =>{
             let records = await getFile()
             if(!records)
             reject('Cannot Open DB file')
             if(records[`${id}`])
             {
                let FacultyObject = new Faculty(records[`${id}`],id)
                // console.log(FacultyObject)
                 resolve( FacultyObject )
            }
        else
             { 
                reject( 'No record found' )
             }
         })
         else
         return  new Promise( async (resolve,reject) =>{
            let records = await getFormattedFile()
            if(!records)
            reject(new Error('Cannot Open DB file'))
           
            resolve(  records  )
       
        })
    }
    
 static  update = async(id,data) =>{
    return new Promise( async (resolve,reject) =>{
        try{
               let FacultyObject = await Faculty.find(id);
               console.log(FacultyObject)
               if(FacultyObject==='No record found')
               throw new Error("User not found")
               FacultyObject.data = {...data,id:id}
               console.log(FacultyObject)
              let record = await FacultyObject.save()
              resolve(record)
            }
 catch(err){
                console.log("er")
                reject(err)
            }
        })
     }
    static remove = async(id) =>{
        try{
            let result = await getFile();
            if(result==='No record found')
            throw new Error("User not found")
            delete result[id]
            console.log(result)
            await WriteToFile(result)
            return 'Record deleted'
         }catch(err){
            throw("User not found")
         }
         
         
     }

  
    
}

let id = '99396cf05cce464814956141f40607a9' 


module.exports = Faculty