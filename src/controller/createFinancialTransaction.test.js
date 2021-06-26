const faker = require('faker')
const makeFakeTransaction = require('../../__test__/fixtures/financialTransaction')
const makeCreateFinancialTransaction = require('./createFinancialTransaction')

describe('create financial transaction controller',()=>{

    it('transaction created successfully',async()=>{

        const financialTransaction = makeFakeTransaction()
        const request = {
            headers:{
                'Content-Type':'application/json'
            },
            body:{...financialTransaction}
        }

        const createFinancialTransaction = makeCreateFinancialTransaction({
            addFinancialTransaction:(transactionData)=>transactionData
        })

        const expected = {
            headers:{
                'Content-Type':'application/json'
            },
            statusCode:201,
            body:{...financialTransaction}
        }

        const actual = await createFinancialTransaction(request) 
        expect(actual).toMatchObject(expected)
    })

    
    it('reproting errors',async()=>{

        const financialTransaction = makeFakeTransaction()
        const request = {
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                id:financialTransaction.id
            },
            body:{...financialTransaction}
        }

        const createFinancialTransaction = makeCreateFinancialTransaction({
            addFinancialTransaction:(transactionData)=> {
                throw Error('BOOM CANT CREATE TRANSACTION!')
            }
        });

        const expected = {
            headers:{
                'Content-Type':'application/json'
            },
            statusCode:400,
            body: { error: 'BOOM CANT CREATE TRANSACTION!' }
        }

        const actual = await createFinancialTransaction(request);
        expect(actual).toMatchObject(expected)
    })
})