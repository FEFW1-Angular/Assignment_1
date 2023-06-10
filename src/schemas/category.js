import Joi from "joi";

const categorySchema = Joi.object(
    {
        name: Joi.string().required().min(4).messages({
            "string.empty": "Tên không được để trống",
            "any.required": 'Trường "Tên" là bắt buộc',
        }),
        img: Joi.string()
    }
)
export default categorySchema;