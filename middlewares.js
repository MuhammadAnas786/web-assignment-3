const check = (data,schema) => {
    let validation = schema.validate( data, {convert: false} )
    if(validation.error) {
        let errorDetails = validation.error.details.map( (val) =>{
            return {
                error: val.message,
                path: val.path
            }
        } )
        return errorDetails;
    }
    else{
        return null
    }

}
const ValidateApiSchema = ( schema ) => {
    return ( req,res,next ) =>{
        let error = check(req.body,schema)
        if(error){
           return res.status(400).json({message:"validation_error_in schema",error} )
        }
        else next()
    }
}
module.exports = ValidateApiSchema

