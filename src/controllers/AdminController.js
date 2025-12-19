const AdminController = {

    index(req, res) {
        return res.render("admin/index", {
            title: "AdminController#index",
            path: req.path
        })
    },


    productList(req, res) {
        return res.render("admin/productList", {
            title: "AdminController#productList", 
            path: req.path
        })
    }
}

module.exports = AdminController;