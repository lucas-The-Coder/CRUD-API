import product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = await product.findById(id);
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const productData = await product.create(req.body);
    res
      .status(201)
      .json({
        message: "Product created successfully",
        products: await product.find({}),
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ message: `Cannot find product with id ${id}` });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getProducts, getSingleProduct, createProduct, updateProduct };
