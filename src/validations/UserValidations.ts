import Joi from 'joi';

export const userValidations = (inputs:any)=>{
    const userSchema = Joi.object({
        firstName: Joi.string().min(1).max(50).required().messages({
            'string.base': 'First name must be a string',
            'any.required': 'First name is required'
        }),
        lastName: Joi.string().min(1).max(50).required().messages({
            'string.base': 'Last name must be a string',
            'any.required': 'Last name is required'
        }),
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(5).max(20).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least {#limit} characters long',
            'string.max': 'Password can be at most {#limit} characters long',
            'any.required': 'Password is required'
        }),
        roleId: Joi.string().allow(null,"").messages({
            'string.base': 'role must be a string',
        }),
        shiftId: Joi.string().allow(null,"").messages({
            'string.base': 'Shift id must be a string',
        }),
        floorId: Joi.string().allow(null,"").messages({
            'string.base': 'Shift id must be a string',
        }),
    });
    const  { error, value } = userSchema.validate(inputs,{ abortEarly: false });
    let errMsg:string[] = [];
    if(error){
        errMsg = error.details.map((detail) => detail.message);
    }
    return {error, value, errMsg};
}

export const loginValidations = (inputs:any)=>{
    const loginSchema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),
        password: Joi.string().min(5).max(20).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least {#limit} characters long',
            'string.max': 'Password can be at most {#limit} characters long',
            'any.required': 'Password is required'
        }),
    });
    const  { error, value } = loginSchema.validate(inputs,{ abortEarly: false });
    let errMsg:string[] = [];
    if(error){
        errMsg = error.details.map((detail) => detail.message);
    }
    return {error, value, errMsg};
}