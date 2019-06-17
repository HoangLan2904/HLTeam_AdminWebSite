const product = require('../models/product');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let sum = 0;

const years = [2016, 2017, 2018, 2019];

exports.date = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
        element.total = formatPrice(element.price * element.count);
        sum += (element.price * element.count);       
    });
    const totalSum = formatPrice(sum);
    res.render('revenue/date', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong ngày', data, totalSum });
};

exports.week = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
        element.total = formatPrice(element.price * element.count*7);
        sum += (element.price * element.count*7);  
        element.count = element.count*7;     
    });
    const totalSum = formatPrice(sum);
    res.render('revenue/week', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong tuần', data, totalSum });
};

exports.month = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
        element.total = formatPrice(element.price * element.count*30);
        sum += (element.price * element.count*30); 
        element.count = element.count*30;      
    });
    const totalSum = formatPrice(sum);
    res.render('revenue/month', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong tháng', data, totalSum, years});
};

exports.quarter = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
        element.total = formatPrice(element.price * element.count*90);
        sum += (element.price * element.count*90);   
        element.count = element.count*90;    
    });
    const totalSum = formatPrice(sum);
    res.render('revenue/quarter', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong quý', data, totalSum, years });
};

exports.year = async (req, res, next) => {
    const data = await product.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
        element.total = formatPrice(element.price * element.count*365);
        sum += (element.price * element.count*365);
        element.count = element.count*365;       
    });
    const totalSum = formatPrice(sum);
    res.render('revenue/year', { category: 'Doanh thu', categoryLink: '/', title: 'Doanh thu trong năm', data, totalSum, years});
};