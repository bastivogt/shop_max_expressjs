const express = require("express");
const router = express.Router();

const ShopController = require("../controllers/AdminController");
const AdminController = require("../controllers/AdminController");


router.get("/admin/", AdminController.index);
router.get("/admin/product/list/", AdminController.productList);

module.exports = router;