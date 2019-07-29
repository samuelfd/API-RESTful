const express = require('express');
const bodyParser = require('body-parser');
const Numbers = require('./Numbers')
const Number = require('./Number')
 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var numbers = new Numbers()
var number = new Number();

app.get('/numbers/sum', async (req,res) => {    
    const array = req.body.array;     
    sum = await numbers.sum(array) 
    return res.status(200).json({success: true, sum: sum }) 
      
   
})

app.get('/numbers/average', async (req,res) => {    
    var array = req.body.array 
    average = await numbers.average(array)  
    return res.status(200).json({success: true, average: average })
})

app.get('/number/sum/:sum/:value_index',async (req,res) => {    
    let sum = req.params.sum
    let value_index = req.params.value_index    
    sum = await number.sum(sum,value_index)        
    return res.status(200).json({success: true, sum: sum })
    
})

app.get('/number/divide/:sum/:size', async (req,res) => {    
    let sum = req.params.sum
    let size = req.params.size   
    media = await number.divide(sum,size)        
    return res.status(200).json({success: true, average: media })
    
})

app.listen(3000);


