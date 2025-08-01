import express from "express";
import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

// Exporting the router
export default router;
