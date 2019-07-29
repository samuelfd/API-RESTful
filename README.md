# API-REST
API REST responsável por somar e calcular a média aritmética de um vetor de inteiros.

# Como Utiizar a API REST
1. Clone o repositório : 
> Git clone https://github.com/samuelfd/API-RESTful.git
2. Entre na pasta raiz da API :
> cd API-RESTful/ 
3. Instale as dependências da API :
> npm i
4. Para realizar as requisições utilize o Postman : 
> snap install postman
5. Execute a APIREST utilizando o node :
> node src/index.js
6. Abra o Postman 
7. Para realizar a soma do vetor de inteiros, acesse a seguinte url passando o array em formato JSON no corpo da requisição, utilizando o metodo POST :
>localhost:3000/numbers/sum
```JSON 
{ 
	"array" : [1,2,3] 
}
```  

	
8. Para realizar a média aritmética realize o mesmo procedimento do item 7, utilizando a seguinte url :
>localhost:3000/numbers/average

9. Em ambas as requisições a resposta deve ser um JSON como demostrado abaixo: 

```JSON 
{
    "success": true,
    "average": 5
}
```  

# Documentação

1. A documentação da APIREST foi feita utilizando o framework Swagger, existe dois arquivos na pasta Documentacao, em ambos estão descrito a documentação da APIREST, para visualizar a documentação você deve acessar o [Swagger] (https://editor.swagger.io) e importar qualquer um dos dois arquivos a parti no menu "File".

# Teste Unitário

Os teste ultilizam o framework Jasmine sua documentação pode ser encontrada em [Jasmine](https://jasmine.github.io/) 

1. Para executar os testes unitários basta executar o seguinte código :
> npm test

2. Para visualizar o codigo fonte dos testes basta acessar os seguintes arquivos :
>/spec/Number.spec.js "Teste unitário da classe Number"

>/sepc/Numbers.spec.js "Teste unitário da classe NUmbers"
