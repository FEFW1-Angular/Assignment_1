import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    descript_1: {
        type: String,
        required: true,
    },
    descript_2: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Blog", blogSchema);