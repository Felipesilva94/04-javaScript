//1 - crie uma função que exiba uma mensagem no console

function mensagemConsole(){
    console.log('javaScript é top');
}
mensagemConsole();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function myName(lippeSilva){
    console.log(`criei uma função com o parâmetro`);

}myName();


//3 - crie uma função que receba nome, idade, 
// e um estilo musical preferido (parâmetros) e exiba no console

function dadosPessoais(nome, idade, estiloMusical){
    console.log(`meu nome é ${nome} tenho ${idade} anos, curto música ${estiloMusical}`); 

}
dadosPessoais('Felipe', 28, 'gospel');

//4 - crie uma função que receba um filme,
//  uma música (parâmetros) e exiba no console
function favorite(filme, música){
    console.log(`meu filme favorito é ${filme} e minha musica predileta é ${música}.`); 

}
favorite('Velozes e Furiosos', '"o amigo" - Sergio Lopes',);

// *Bônus:

//5 - crie uma função que retorne o
//  triplo do número recebido no parâmetro da função

function triplo(numero){
    return numero * 3;
}
let result = triplo(100);
console.log(`o triplo é ${result}`);
