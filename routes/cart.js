const express = require("express");
const { createCart, getCart } = require("../controllers/cart");
const router = express.Router()


// create a new category

router.post("/create", createCart);

router.get("/", getCart);

module.exports = router;