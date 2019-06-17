const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

/* GET users listing. */
router.get('/', userControllers.list);

router.get('/add', userControllers.add);

router.post('/add', userControllers.addPost);

router.get('/edit/:id', userControllers.edit);

router.post('/edit', userControllers.editDone);

router.get('/delete/:id', userControllers.delete);

module.exports = router;
