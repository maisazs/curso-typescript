// let e const
var seraQuePode = '?';
console.log(seraQuePode);

let estaFrio = true;
if(estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}

const cpf: string = '000.000.000-00';
// cpf = '111.111.111-11';
console.log(cpf);

var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);

{
    const def = 'def';
    console.log(def);
}

for(let i = 0 ; i < 5 ; i++) {
    console.log(i);
}
// console.log(i);


//Arrow Function

// function somar (n1: number, n2: number): number {
//     return n1 + n2;
// }

const somar = function(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 3));

// const multiplicar = (n1: number, n2: number) => {
//     return n1 * n2;
// }
// console.log(multiplicar(2, 3));

// Quando abre bloco precisa do return, quando não abre bloco não tem necessidade do return, objetico da arrow func é simmplificar a sintaxe.

// function saudacao() {
//     console.log("Olá!")
// }

// const saudacao = function(n1, n2) {
//     return abc;
// }

const saudacao = () => console.log("Olá!");
saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa); //quando tem apenas um parâmetro não há necessidade de colocar-lo entre parênteses, porém se há necessidade de definir o tipo de parâmetro, é necessario colocar os parênteses. 
falarCom('João');

// this

// function normalComThis() {
//     console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();


// const arrowCommThis = () => console.log(this);
// arrowCommThis();

// parâmetro padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio);
    while(inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}

contagemRegressiva();
contagemRegressiva(3);


// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));

console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
console.log(turmaA);
const turmaB: string[] = ['Fernando', ...turmaA,'Miguel', 'Lorena'];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
    return args;
}

const numeros = retornarArray(1, 2, 3 , 4, 5, 6, 345);
console.log(numeros);
console.log(retornarArray(...numbers));


// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b:string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);


// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);


// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
}

const nomeItem = item.nome;
const preco = item.preco;
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);

const usuarioID = 'SuporteCod3r';
const notificacoes: string = '100';
const boasVindas = `Boas vindas ${usuarioID} Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas);


// Callback

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000)
}

esperar3s(function(resultado: string) {
    console.log(resultado);
})

function esperar3sPromise() {
    return new Promise ((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois...');
        }, 3000)
    })
}

esperar3sPromise().then(dado => console.log(dado));

// fetch('https://swapi.dev/api/people/1')
//     .then(res => console.log(res.json()))
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilms => resFilms,json())
//     .then(filme => console.log(filme.title))
//     .catch(res => console.log('Catch!!!! + err'));