const facultController = {
    get : async function(req,res){
       return res.status(200).json({ title: 'Express' });
    }
}
module.exports = facultController