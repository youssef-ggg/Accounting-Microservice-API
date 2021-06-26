const express = require('express')
const dotenv = require('dotenv')

const financialTransactionController = require('./controller')
const makeCallBack = require('./expressCallback')

dotenv.config()
const app = express()

app.use(express.json())

const PORTNUMBER =  process.env.SERVER_PORT 

const {
    createFinancialTransaction,
    getMonthlyTransactions,
    getAllFinancialTransaction,
    getFinancialTransactionById,
    updateFinancialTransaction,
    deleteFinancialTransaction

} = financialTransactionController

//invstegate using query vs params
app.post(`/financialTransaction/addTransaction`,makeCallBack(createFinancialTransaction))
//this query takes 2 values of month and year
app.get(`/financialTransaction/listMonthly/:monthyear`,makeCallBack(getMonthlyTransactions))
app.get(`/financialTransaction/listAll`,makeCallBack(getAllFinancialTransaction))
app.get(`/financialTransaction/:id`,makeCallBack(getFinancialTransactionById))
app.patch(`/financialTransaction/updateTransaction/:id`,makeCallBack(updateFinancialTransaction))
app.delete(`/financialTransaction/deleteTransaction/:id`,makeCallBack(deleteFinancialTransaction))


app.listen(PORTNUMBER,()=>{
    console.log(`Server is listening on port ${PORTNUMBER}...`)
})


