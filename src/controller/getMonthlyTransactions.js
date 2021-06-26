module.exports = function makeGetMonthlyTransactions({listMonthlyFinancialTransaction}){

    return async function getMonthlyTransactions(httpRequest){
        
        const headers = {
            'Content-Type':'application/json'
        }
        try {
          
            const {month,year} = httpRequest.query
            const monthlyTransactions = await listMonthlyFinancialTransaction({month,year})

            return {
              headers,
              statusCode:200,
              body:monthlyTransactions  
            }
        } catch (error) {
            //TODO:CREATE error logger
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