var express = require('express');
var router = express.Router();

const UserController = require('../Controllers/users');
/* GET users listing. */
router.get('/', UserController.user);

module.exports = router;
