var Numbers = require("../src/Numbers")


describe("Deve somar um vetor de números inteiros",function(){
    it("Calcular a soma dos inteiros de um vetor", function(){
        let numbers = new Numbers()
        let vetor = [1,2,3,4]
        expect(numbers.sum(vetor)).toEqual(10)
    })
})


describe("Deve calcular a média aritmética de um vetor de números inteiros",function(){
    it("Calcular a média aritmética de um vetor de  inteiros", function(){
        let numbers = new Numbers()
        let vetor = [5,4,7,4]
        expect(numbers.average(vetor)).toEqual(5)
    })
})