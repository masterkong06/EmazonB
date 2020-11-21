const express = require("express");
const products = express.Router();

const Product = require("../models/products.js");

//middleware
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// index
products.get("/", (req, res) => {
  Product.find({}, (error, foundProducts) => {
    if (error) {
      res.status(400).json({ error: error.product });
    }
    res.status(200).json(foundProducts);
  });
});

// create
products.post("/", async (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) {
      res.status(400).json({ error: error.product });
    }
    res.status(200).json(createdProduct);
  });
});

/////////////
/// EDIT ////
/////////////

// products.get("/:id/edit", (req, res) => {
//   Product.findById(req.params.id, (err, foundProduct) => {
//     //find the Product
//     res.render("edit.ejs", {
//       product: foundProduct, //pass in found Product
//     });
//   });
// });

///////////
// UPDATE//
// ///////////
// products.put("/:id", (req, res) => {
//   // if(req.body.readyToEat === 'on'){
//   //     req.body.readyToEat = true;
//   // } else {
//   //     req.body.readyToEat = false;
//   // }
//   Product.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, updatedModel) => {
//       res.redirect("/products");
//     }
//   );
// });

// show///
//////////
products.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render("show.ejs", {
      product: foundProduct,
    });
  });
});

// delete
products.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (error, deletedProduct) => {
    if (error) {
      res.status(400).json({ error: error.product });
    }
    res.status(200).json(deletedProduct);
  });
});

// update
products.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedProduct) => {
      if (error) {
        res.status(400).json({ error: error.product });
      }
      res.status(200).json(updatedProduct);
    }
  );
});

module.exports = products;
