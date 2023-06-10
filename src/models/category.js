import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: String
});

export default mongoose.model("Category", categorySchema);