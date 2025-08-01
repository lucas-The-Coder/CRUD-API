const API_URL = "http://localhost:3000";
const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API!");
});

mongoose
  .connect("mongodb+srv://admin:10506@cluster0.a9o19.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to MongoDB failed!");
  });
