const category = require('../models/category');
const product = require('../models/product');

exports.products = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('top/product', { category: 'Top 10', categoryLink: '/', title: 'Sản phẩm', data });
};

exports.category = async (req, res, next) => {
    const data = await category.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('top/category', { category: 'Top 10', categoryLink: '/', title: 'Thể loại', data });
};