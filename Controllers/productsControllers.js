const product = require('../models/product');
const category = require('../models/category');

exports.index = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('products/index', { category: 'Sản phẩm', categoryLink: '/product', title: 'Danh sách sản phẩm', data })
};

exports.add = async (req, res, next) => {
    const data = await category.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('products/add', { category: 'Sản phẩm', categoryLink: '/product', title: 'Thêm sản phẩm', data });
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};
