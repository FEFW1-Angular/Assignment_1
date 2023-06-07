import blog from "../models/blog";
import blogSchema from "../schemas/blog";


export const getAll = async(req, res) => {
    try {
        const data = await blog.find();

        if (data.length == 0) {
            return res.json({
                message: "Khong co blog nao",
            });
        }
        return res.json(data);
    } catch (error) {}
};
export const get = async(req, res) => {
    try {
        const id = req.params.id;
        // const { data } = await axios.get(`http://localhost:3002/products/${id}`);
        const data = await blog.findOne({ _id: id });
        if (data.length === 0) {
            return res.status(200).json({
                message: "Khong co blog nao",
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async(req, res) => {
    try {
        const body = req.body;
        const { error } = blogSchema.validate(body);
        if (error) {
            return res.json({
                message: error.details[0].message,

            });
        }
        const data = await blog.create(body);
        if (data.length === 0) {
            return res.status(400).json({
                message: "Them blog that bai",
            });
        }
        return res.status(200).json({
            message: "Them blog thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async(req, res) => {
    try {
        // await axios.delete(`http://localhost:3002/products/${req.params.id}`);
        const data = await blog.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xoa blog thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const update = async(req, res) => {
    try {
        const data = await blog.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(400).json({
                message: "Cap nhat blog thanh cong",
            });
        }
        return res.json({
            message: "Cap nhat blog thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};