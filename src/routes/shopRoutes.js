const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/ShopController");


router.get("/", ShopController.index);

module.exports = router;




