const Joi = require('joi')
1
const FacultySchema = Joi.object({
   name: Joi.string().required(),
   email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','pk','io'] } }).required(),
   gender:Joi.string().valid('male','female','others'),
   course_code : Joi.string().required(),
   phone_number: Joi.array().required(),
   address:Joi.object(
       {
        street_address: Joi.string().required()
        , city:Joi.string().required() ,
        country:Joi.string().required()
       }
   ).required()
   

}).unknown(false)
module.exports = FacultySchema