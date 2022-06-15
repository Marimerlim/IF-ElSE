//Desafio 02 - IF/ElSE

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
/*5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras 
       OU seu nome começar com a letra E
*/

//1
let age = 22;
if (age >= 18){
    console.log("D'maior você é!")
}else{
   console.log("Barrado você está!")
}

//2
let adult = 25
let bot = 'robo'

if ((adult >= 18) && (bot === "humano")){
    console.log('Seja Bem-vindo!')
}else{
     console.log('Saia por onde entrou!')
}

//3
let month = "Fevereiro"

if (month == "Janeiro" || month == "Dezembro"){
    console.log("Parabéns!!!")
}else{
    console.log("Tá mentindo por quê?")
}

//4
let nome = 'L';

if (nome == 'R'){
    console.log ('Válido')
}else{
    console.log ('Inválido')
}
//não entendi como fazer para um sobrenome tipo Rodrigues ou Ramos

//5
let lastName = 'Exxxxxxxxxxxxx'

if (lastName == 'xxxxxx' || lastName == 'Exxxxx'){
    console.log ('Nome perfeito')
}else{
    console.log ('Nome recusado, troque!')
}


