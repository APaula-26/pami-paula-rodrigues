// Métodos - são especificos da linguagem, como Math por exemplo, são coisas prontas na linguagem 
// Funções - é o que nós criamos, e isso varia de linguagem para linguagem, mas no JS é tudo função. 
// Php chama $ quando é variavel, no java não precisa de $
// função simples se baseia chamando Function, após isso o nome da função, declaração do parametro da função -> entre {} declara do que você espera da função 
// O computador precisa de detalhamento de tudo, a lógica precisa estar bem descrita, passo a passo.
// Como seria um modo de tornar uma função mais privada: você precisa criar uma função anônima ou Arrow Function (porque tem uma flexa é Arrow Function) 
// criar uma const "nome da função" = () => {}

function SomaSimples(){
    return 3 + 4
}

console.log(SomaSimples())


function SomaComParametro(n1, n2){
    return n1 + n2 
}

console.log(SomaComParametro(3, 4))
console.log(SomaComParametro(10, 4))

const Potencia = (n, e) => {
    return Math.pow(n,e)
}

console.log(Potencia(2, 3))

const Potencias = (n, e) => {
    //let result = Math.pow(n,e)
    console.log(`${n} elevado a ${e} é ${Math.pow(n,e)}`)
}

Potencias(3,2)

// Fazer uma função que calcule a média do aluno exiba o resultado 
// média >= 6,00 = Aprovado 
// media >= 4,00 || <6 = Recuperação 
// media < 4,00 = Reprovado 


function media (n1, n2, n3, n4) {
   
    let result = (n1 + n2 + n3 + n4) / 4
    
    if(result >= 6.00){
        console.log(`Aprovado`)
    }else if(result <4 ){
        console.log(`Reprovado`)
    }else{
        console.log(`Recuperação`)
    }
}

media(7, 10, 5, 7)

//Swich case: tem varias formas de se colocar o resultado. Substitui if

function mediaJ (n1, n2, n3, n4) {
   
    let mediaJ = (n1 + n2 + n3 + n4) / 4
    
    switch (mediaJ) {
        case mediaJ = 6:
        text="Aprovado";
        break;
        case mediaJ = 7:
        text="Aprovado";
        break;
        case mediaJ = 8:
        text="Aprovado";
        break;
        case mediaJ = 9:
        text="Aprovado";
        break;
        case mediaJ = 10:
        text="Aprovado";
        break;
        case mediaJ = 4:
        text="Recuperação";
        break;
        case mediaJ = 5:
        text="Recuperação";
        break;
        default:
            text="Reprovado";
    }
}

mediaJ(5, 9, 10, 7)

return text