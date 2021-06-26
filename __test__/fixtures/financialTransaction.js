const faker = require('faker');

module.exports = function makeFakeTransaction(overrides){
    const financialTransaction = {
        id:faker.datatype.uuid(),
        description:faker.random.words(),
        date:faker.date.recent().getTime(),
        amount:faker.finance.amount(),
        cashFlow:faker.datatype.boolean()?'Cash In':'Cash Out',
        type:faker.datatype.number(6),
        referenceNum:faker.datatype.number(50),
        createdOn:Date.now(),
        modifiedOn:Date.now(),
    }
    return {
        ...financialTransaction,
        ...overrides
    }
}