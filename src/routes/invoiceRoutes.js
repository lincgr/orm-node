const express = require('express');
const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.get('/', invoiceController.getAllInvoicesWithClients);

module.exports = router;