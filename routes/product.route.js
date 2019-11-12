const express = require('express');
const auth = require("../middleware/auth");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', auth, product_controller.product_create);
router.get('/:id', auth, product_controller.product_details);
router.get('/', auth, product_controller.product_all);
router.put('/:id/update', auth, product_controller.product_update);
router.delete('/:id/delete', auth, product_controller.product_delete);
module.exports = router;