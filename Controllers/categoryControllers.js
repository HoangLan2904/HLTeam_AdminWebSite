
const category = require('../models/category');


exports.index = async (req, res, next) => {
    const data = await category.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('category/index', { category: 'Thể loại', categoryLink: '/category', title: 'Danh sách thể loại', data })
};

exports.add = (req, res, next) => {
    res.render('category/add', { category: 'Thể loại', categoryLink: '/category', title: 'Thêm thể loại' });
};

exports.addPost = async (req, res, next) => {
    await category.add(req.body);
    res.redirect('./');
};
