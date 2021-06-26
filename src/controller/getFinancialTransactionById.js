module.exports = function makeGetFinancialTransactionById({findFinancialTransaction}){
    
    return async function getFinancialTransactionById(httpRequest){

        const headers = {
            'Content-Type':'application/json'
        }

        try {

            const {id} = httpRequest.query;
            const financialTransaction = await findFinancialTransaction({id})
            
            return {
                headers,
                statusCode:200,
                body:{financialTransaction}
            }

        } catch (error) {
            //TODO:build error logger
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