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

/*
    index(),
    show(id),
    create(),
    store(),
    edit(id),
    update(id),
    destroy(id)
*/

module.exports = AdminController;