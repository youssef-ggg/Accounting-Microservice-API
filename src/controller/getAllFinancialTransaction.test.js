
const makeGetAllFinancialTransaction = require('./getAllFinancialTransaction')
const makeFakeTransaction = require('../../__test__/fixtures/financialTransaction')

describe('get financial transaction contoller',()=>{

    it('list all transactions',async()=>{

        const financialTransactionList = []
        for(index=0;index<3;index++){
            financialTransactionList.push(makeFakeTransaction())
        }
        const request = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        const getAllFinancialTransaction = makeGetAllFinancialTransaction({
            listAllFinancialTransaction:()=>financialTransactionList,
        })

        const response = await getAllFinancialTransaction(request)

        const {statusCode,body} = response
        expect(statusCode).toBe(200)
        const {financialTransactions} = body
        for (let index = 0;index <3;index++){

            expect(financialTransactions[index]).toMatchObject(financialTransactionList[index]);
        }
        
    })

    it('reporting errors',async()=>{

        const financialTransactionList = []
        for(index=0;index<3;index++){
            financialTransactionList.push(makeFakeTransaction())
        }
        const request = {
            headers:{
                'Content-Type':'application/json'
            },
        }

        const getAllFinancialTransaction = makeGetAllFinancialTransaction({
            listAllFinancialTransaction:()=>{
                throw new Error('BOOM CAN\'T LIST TRANSACTION!')
            }
        })

        const expected = {
            headers:{
                'Content-Type':'application/json'
            },
            statusCode:400,
            body: { error: 'BOOM CAN\'T LIST TRANSACTION!' }
        }

        const result = await getAllFinancialTransaction(request)
        expect(expected).toMatchObject(result)
    });
});