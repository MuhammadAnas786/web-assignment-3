const asyncLock = require('async-lock');
const fs = require('fs')
const FILE = 'data.json'

let lock = new asyncLock()

const getFile = async() =>{
    try{
        const records = await JSON.parse(fs.readFileSync(FILE));
      return records
        }
        catch(err){
            console.log(err)
           return null
        }
}
const getFormattedFile = async() => {
    let records = await getFile()
            if(!records)
            return null
    let ar = []
    for (const property in records){
        ar.push(records[property])
    }
    return ar
}
const Validate = async(property,data) =>{
    if(!data[property])
    return false
    let formatttedRecord =await getFormattedFile();
   return formatttedRecord.filter(obj => obj[property]===data[property]&&obj.id!=data.id)
}
const FileLock = function(callback){
    return new Promise( (resolve,reject) => {
        lock.acquire('WriteToFile',callback(resolve,reject))
    })

}
const WriteToFile = async(data) =>{
    return FileLock( (resolve,reject) =>{
     try{
     fs.writeFileSync(
         FILE, JSON.stringify(data)
     )
    resolve()
     }
     catch(err)
    {
         reject(false)
     }
 })
     
 }

module.exports = {
    getFormattedFile,Validate,FileLock,WriteToFile,getFile
}