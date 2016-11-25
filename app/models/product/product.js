"use strict";
var Product = (function () {
    function Product(id, name, price, img, brief, detail, inventory, state, views, reviews, partner_id, product_cate_id, created, updated, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.brief = brief;
        this.detail = detail;
        this.product_cate_id = product_cate_id;
        this.partner_id = partner_id;
        this.views = views;
        this.reviews = reviews;
        this.state = state;
        this.inventory = inventory;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map