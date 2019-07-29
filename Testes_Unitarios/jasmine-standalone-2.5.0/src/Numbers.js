const fetch = require('node-fetch')

module.exports = class Numbers{

     async sum (array){         
        let sum = 0
        for (let i =0; i < array.length; i++ ){
            let value_index = array[i]        
            let resposta = await fetch(`http://localhost:3000/number/sum/${sum}/${value_index}`).then((response)=>response.json()).then(resposta =>{
                return resposta
            })
            .catch(error =>{
                console.error(error)
            });
            sum = resposta.sum   
               
             
        }
        return sum
        
     }

    async average(array){
        let sum = 0  
        for (let i =0; i < array.length; i++ ){
            let value_index = array[i]        
            let resposta = await fetch(`http://localhost:3000/number/sum/${sum}/${value_index}`).then((response)=>response.json()).then(resposta =>{
                return resposta
            })
            .catch(error =>{
                console.error(error)
            });
            sum = resposta.sum            
        }
        
        let size = array.length
        let resposta = await fetch(`http://localhost:3000/number/divide/${sum}/${size}`).then((response)=>response.json()).then(resposta =>{
                return resposta
            })
            .catch(error =>{
                console.error(error)
            });
            media = resposta.average  
            return media
            
     }
}