const express = require('express');
const bodyParser = require('body-parser');
const Numbers = require('./Numbers')
const Number = require('./Number')
 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var numbers = new Numbers()
var number = new Number();

// Retira restições do CORS para que seja possivel utilizar o swagger para testes
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Endpoint responsável pela soma do vetor de inteiros
app.post('/numbers/sum', async (req,res) => { 
       
    const array = req.body.array;     
    sum = await numbers.sum(array) 
    return res.status(200).json({success: true, sum: sum }) 
      
   
})

//Endpoint responsável por calcular a média aritmética de um vetor de inteiros
app.post('/numbers/average', async (req,res) => {    
    var array = req.body.array 
    average = await numbers.average(array)  
    return res.status(200).json({success: true, average: average })
})

//Endpoint responsável por fazer a soma de dois inteiros
app.get('/number/sum/:a/:b',async (req,res) => {    
    let a = req.params.a
    let value_index = req.params.b    
    sum = await number.sum(a,value_index)        
    return res.status(200).json({success: true, sum: sum })
    
})
//Endpoint responsável por fazer a divisão de dois inteiros
app.get('/number/divide/:a/:b', async (req,res) => {    
    let sum = req.params.a
    let size = req.params.b   
    media = await number.divide(sum,size)        
    return res.status(200).json({success: true, average: media })
    
})

app.listen(3000);


