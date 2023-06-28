const Invoice = require('../models/invoice');
const Client = require('../models/client');

exports.getAllInvoicesWithClients = async () => {
  try {
    const invoices = await Invoice.findAll({
      include: [Client], // Include the Client model to fetch client information
    });
    return invoices;
  } catch (error) {
    throw new Error('Failed to retrieve invoices with clients');
  }
};