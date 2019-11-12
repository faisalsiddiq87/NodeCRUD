const express = require('express');
const auth = require("../middleware/auth");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', user_controller.user_create);
router.get('/:id', auth, user_controller.user_details);
router.put('/:id/update', auth, user_controller.user_update);
router.delete('/:id/delete', auth, user_controller.user_delete);
module.exports = router;