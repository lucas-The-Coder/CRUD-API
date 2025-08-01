const product = require("../models/product.model.js");

const getProducts = async (req, res) => {
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: `Cannot find product with id ${id}` });
        }
        const updatedProduct = await product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Cannot find product with id ${id}` });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchProductsByName = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await product.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getProducts, 
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProductsByName
}