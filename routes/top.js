const express = require('express');
const router = express.Router();

const topControllers = require('../controllers/topControllers');

router.get('/products', topControllers.products);

router.get('/category', topControllers.category);



module.exports = router;