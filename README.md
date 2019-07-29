# API-REST
API REST responsável por somar e calcular a média aritmética de um vetor de inteiros.

# Como Utiizar a API REST
1. Clone o repositorio : 
> Git clone https://github.com/samuelfd/API-RESTful.git
2. Entre na pasta raiz da API :
> cd API-RESTful/ 
3. Instale as dependencias da API :
> npm i
4. Para realizar as requisiçoes utilize o Postman : 
> snap install postman
5. Execute a APIREST utilizando o node :
> node src/index.js
6. Abra o Postman 
7. Para realizar a soma do vetor de inteiros, acesse a seguinte url passano o array em formato JSON no corpo da requisição, utilizando o metodo GET :
>localhost:3000/numbers/sum
```JSON 
{ 
	"array" : [1,2,3] 
}
```  

	
8. Para realizar a média aritmética realize o mesmo proedimento do item 7, utilizando a seguinte url :
>localhost:3000/numbers/average
