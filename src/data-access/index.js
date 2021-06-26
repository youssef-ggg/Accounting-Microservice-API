const {MongoClient,ObjectID} = require('mongodb')


const makeTransactionCollection = require('./financialTransaction')

const url = 'mongodb://localhost:27017'
const dbName = 'TestDB'; //use env

const mongoOptions = {
    useNewUrlParser:true,
    useUnifiedTopology: true
};
const client = new MongoClient(url,mongoOptions)

async function makeDb(){
    if(!client.isConnected()){
        try{
        await client.connect()
        }
        catch(error){
            return error
        }
    }
    return client.db(dbName)
}

const financialTransactionCollection = makeTransactionCollection({makeDb,ObjectID})

module.exports = {
    financialTransactionCollection
}

