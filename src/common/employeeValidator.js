import Joi from "joi";

const employeeValidation = (data) => {
    const employeeSchme = Joi.object({
        emp_name: Joi.string().required(),
        emp_email: Joi.string().required(),
        emp_phone: Joi.string().required(),
        emp_village: Joi.string().required(),
        emp_district: Joi.string().required(),
        emp_city: Joi.string().required(),
    });
    return employeeSchme.validate(data);
}

export default employeeValidation;