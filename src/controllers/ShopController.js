const ShopController = {
    index(req, res) {
        
        res.render("shop/index", {
            title: "ShopController#index",
            path: req.path
        });
    }
};

module.exports = ShopController;