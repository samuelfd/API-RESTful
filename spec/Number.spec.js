var Number = require("../src/Number")


describe("Deve somar dois número inteiros",function(){
    it("Calcular a + b = ", function(){
        let number = new Number()
        expect(number.sum(5,8)).toEqual(13)
    })
})

describe("Deve dividi dois número inteiros",function(){
    it("Calcular a / b = ", function(){
        let number = new Number()
        expect(number.divide(8,4)).toEqual(2)
    })
})

