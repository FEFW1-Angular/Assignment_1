import Joi from "joi";

const blogSchema = Joi.object({
    title: Joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": 'Trường "Tên" là bắt buộc',
    }),
    img: Joi.string().required(),
    descript_1: Joi.string().required(),
    descript_2: Joi.string().required()
})
export default blogSchema;