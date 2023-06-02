import Joi from "joi";
import Product from "../models/product";
import Category from "../models/category";
import productSchema from "../schemas/product";

export const getAllProduct = async (req, res) => {
  try {
    const dataProducts = await Product.find();
    if (dataProducts.length === 0) {
      return res.status(400).json({ message: "Product not found" });
    }
    return res.status(200).json(dataProducts);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const dataProduct = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (dataProduct.length === 0) {
      return res.status(400).json({ message: "Product not found" });
    }
    return res.status(200).json(dataProduct);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details.map((err) => err.message) });
    }
    const dataProduct = await Product.create(req.body);
    if (dataProduct.length === 0) {
      return res.status(400).json({ message: "Add Product failed" });
    }
    await Category.findByIdAndUpdate(dataProduct.categoryId, {
      $addToSet: {
        products: dataProduct._id,
      },
    });

    return res.status(200).json({
      message: "Add Product Success",
      dataProduct,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details.map((err) => err.message) });
    }
    const productUpdate = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productUpdate) {
      return res.status(400).json({ message: "Update product failed" });
    }
    return res.status(200).json({ message: "Product updated", productUpdate });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Not find product" });
    }
    return res
      .status(200)
      .json({ message: "Product deleted successfully", deleteProduct });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
