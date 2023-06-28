const Invoice = require('../models/invoice');
const invoiceService = require('../services/invoiceService');

exports.getAllInvoicesWithClients = async (req, res) => {
  try {
    const invoices = await invoiceService.getAllInvoicesWithClients();
    res.json(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};