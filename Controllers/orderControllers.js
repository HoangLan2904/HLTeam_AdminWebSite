const order = require('../models/order');

exports.done = async (req, res, next) => {
    const data = await order.listDone();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/done', { category: 'Đơn hàng', categoryLink: '/order/done', title: 'Đơn hàng đã giao', data })
};

exports.delivering = async (req, res, next) => {
    const data = await order.listDelivering();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/delivering', { category: 'Đơn hàng', categoryLink: '/order/delivering', title: 'Đơn hàng đang giao', data })
};

exports.receive = async (req, res, next) => {
    const data = await order.listReceive();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('order/receive', { category: 'Đơn hàng', categoryLink: '/order/receive', title: 'Đơn hàng chưa giao', data })
};
