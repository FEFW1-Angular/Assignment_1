import Joi from "joi";

const productSchema = Joi.object(
    {
        name: Joi.string().required().min(4).messages({
            "string.empty": "Tên không được để trống",
            "any.required": 'Trường "Tên" là bắt buộc',
        }),
        price : Joi.number().required().messages({
            "number.empty": "Price không được để trống",
            "any.required": 'Trường "Price" là bắt buộc',
        }),
        img: Joi.string(),
        categoryId: Joi.string().required(),
    }   
)
export default productSchema;