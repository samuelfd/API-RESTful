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
7. Para realizar a soma do vetor de inteiros, acesse a seguinte url passando o array em formato JSON no corpo da requisição, utilizando o metodo GET :
>localhost:3000/numbers/sum
```JSON 
{ 
	"array" : [1,2,3] 
}
```  

	
8. Para realizar a média aritmética realize o mesmo procedimento do item 7, utilizando a seguinte url :
>localhost:3000/numbers/average

# Documentação

1. A documentação da APIREST foi feita utilizando o framework Swagger, existe dois arquivos na pasta Documentacao, em ambos estão descrito a documentação da APIREST, para visualizar a documentação você deve acessar o [Swagger Hub] (https://app.swaggerhub.com) e fazer o Upload de qualquer um dos dois arquivos.
