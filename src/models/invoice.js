const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./client');
const Employee = require('./employee');

const Invoice = sequelize.define('Invoice', {
  idInvoice: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  idClient: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idEmployee: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
 } , {
    tableName: 'invoice',
    timestamps: false,
  });

Invoice.belongsTo(Client, { foreignKey: 'idClient' });
Invoice.belongsTo(Employee, { foreignKey: 'idEmployee' });

module.exports = Invoice;