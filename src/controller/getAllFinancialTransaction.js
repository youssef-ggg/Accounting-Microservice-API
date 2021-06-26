module.exports = function makeGetAllFinancialTransaction({listAllFinancialTransaction}){

    return async function getAllFinancialTransaction(httpRequest){

        const headers = {
            'Content-Type':'application/json'
        }

        try {    
            const financialTransactions = await listAllFinancialTransaction();

            return {
                headers,
                statusCode:200,
                body:{
                    financialTransactions
                }
            }
        } catch (error) {
            return {
                headers,
                statusCode:400,
                body:{
                    error:error.message
                }
            }
            
        }
    }
}