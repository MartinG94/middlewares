// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middlewares/admin');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin', adminMiddleware.verifyAdmin , mainController.saludarAdmin);

module.exports = router;
