var express = require('express');
const { products } = require("../model/product.model");

var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/products', function (req, res, next) {
  res.status(200).send(products);
});

module.exports = router;