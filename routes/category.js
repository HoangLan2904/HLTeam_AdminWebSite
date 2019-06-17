const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

router.get('/', categoryController.index);

router.get('/add', categoryController.add);

router.post('/add', categoryController.addPost);

module.exports = router;