
const financialTransactionServices = require('../use-cases')

const makeCreateFinancialTransaction = require('./createFinancialTransaction')
const makeGetMonthlyTransactions = require('./getMonthlyTransactions')
const makeGetAllFinancialTransaction = require('./getAllFinancialTransaction')
const makeGetFinancialTransactionById = require('./getFinancialTransactionById')
const makeUpdateFinancialTransaction = require('./updateFinancialTransaction')
const makeDeleteFinancialTransaction =require('./deleteFinancialTransaction')

const {addFinancialTransaction,listMonthlyFinancialTransaction,listAllFinancialTransaction,
    findFinancialTransaction,editFinancialTransaction,removeFinancialTransaction
    } = financialTransactionServices;

const createFinancialTransaction = 
    makeCreateFinancialTransaction({addFinancialTransaction});
const getMonthlyTransactions = 
    makeGetMonthlyTransactions({listMonthlyFinancialTransaction});
const getAllFinancialTransaction = makeGetAllFinancialTransaction({
    listAllFinancialTransaction
});
const getFinancialTransactionById = makeGetFinancialTransactionById({
    findFinancialTransaction
});
const updateFinancialTransaction = makeUpdateFinancialTransaction({
    editFinancialTransaction
});
const deleteFinancialTransaction = makeDeleteFinancialTransaction({
    removeFinancialTransaction
});

const  financialTransactionController = Object.freeze({
    createFinancialTransaction,getMonthlyTransactions,getAllFinancialTransaction,
    getFinancialTransactionById,updateFinancialTransaction,deleteFinancialTransaction
});

module.exports = financialTransactionController;