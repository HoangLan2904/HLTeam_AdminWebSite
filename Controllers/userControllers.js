const user = require('../models/user');


exports.edit = async (req, res, next) => {
    const data = await user.edit(req.params.id);
    res.render('users/edit', {category: 'Tài khoản', categoryLink: '/users', title: 'Thay đổi thông tin', data });
};

exports.editDone = async (req, res, next) => {
    await user.editDone(req.body);
    res.redirect('./');
};

exports.delete = async (req, res, next) => {
    await user.delete(req.params.id);
    res.redirect('./');
}

exports.list = async (req, res, next) => {
    var users = await user.list();
    users.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('users/index', { category: 'Tài khoản', categoryLink: '/users', title: 'Danh sách tài khoản', users });
};

exports.add = (req, res, next) => {
    res.render('users/add', { title: 'Tài khoản'});
};

exports.addPost = async (req, res, next) => {
    await user.add(req.body);
    res.redirect('./');
};