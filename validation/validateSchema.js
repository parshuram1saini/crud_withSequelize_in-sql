const Joi = require("joi")
const joivalidation = Joi.object({
    firstName: Joi.string().max(10).min(3).required(),
    lastName: Joi.string().max(10).min(3).required(),
    email:Joi.string().email().required(),
    age: Joi.number().less(65).greater(12),
    course: Joi.string().max(8).uppercase().required(),
    city: Joi.string().max(10).min(3).required()
})

module.exports = joivalidation;