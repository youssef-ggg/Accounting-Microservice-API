module.exports = function makeDeleteFinancialTransaction({removeFinancialTransaction}){

    return async function deleteFinancialTransaction(httpRequest){

        const headers = {
            'Content-Type': 'application/json'
        }

        try {

            const deleted = await removeFinancialTransaction({id: httpRequest.params.id})
            
            return {
                headers,
                statusCode: deleted.deletedCount === 0 ? 404 : 200,
                body: { deleted }
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