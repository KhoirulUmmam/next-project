import Joi from "joi";

const steakValidation = (data) => {
    const steakSchme = Joi.object({
        s_name: Joi.string().required(),
        s_quality: Joi.string().required(),
        s_shipment: Joi.date().required(),
        s_village: Joi.string().required(),
        s_district: Joi.string().required(),
        s_city: Joi.string().required(),
    });
    return steakSchme.validate(data);
}

export default steakValidation;