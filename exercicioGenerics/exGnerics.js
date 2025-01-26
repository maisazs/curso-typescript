"use strict";
// 1)
// Criando uma função genérica simples:
// Implemente uma função chamada identity que aceita um valor de qualquer
//  tipo e retorna esse valor. Use generics para garantir que o tipo do 
// retorno seja o mesmo do argumento.
function identity(value) {
    return value;
}
console.log(identity(12));
// 7)
// Transformação de tipos com generics:
// Implemente uma função chamada mapArray que aceita um array de tipo
// genérico T e uma função de mapeamento, retornando um novo array com 
// os elementos transformados.
function mapArray(array, transform) {
    const arrTransformed = array.map(transform);
    return arrTransformed;
}
function transform(num) {
    return (num) * 2;
}
const arr = [1, 2, 3, 4, 5];
console.log(mapArray(arr, transform));
// 8) Generics em tipos condicionais:
// Crie um tipo genérico chamado IsString<T> que avalia para true se T 
// for do tipo string, e false caso contrário. Teste o comportamento com 
// diferentes tipos.
{
    function checkIfString(value) {
        return (typeof value === 'string');
    }
    const result1 = checkIfString('mayza');
    const result2 = checkIfString(123);
    const result3 = checkIfString(true);
    console.log(result1);
    console.log(result2);
    console.log(result3);
}
// 9)
// Utilizando generics com Promises:
// Implemente uma função chamada fetchData que simula uma chamada 
// assíncrona. Use generics para garantir que o tipo da resposta seja 
// especificado no momento da chamada.
// {
//     function fetchData<T>(url:string): Promise<T> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 try {
//                     const mockData: unknown = {
//                         url,
//                         data: { id: 1, name: 'Maya' },
//                     }
//                     resolve(mockData as T)
//                 } catch (error) {
//                     reject('Erro ao buscar os dados.')
//                 }
//             }, 1000)
//         })
//     }
//     interface ApiResponde {
//         url: string
//         data: {
//             id: number
//             name: string
//         }
//     }
//     (async () => {
//         try {
//             const response = await fetchData<ApiResponde>('https://api.example.com')
//             console.log(response)
//             console.log(response.data.name)
//         } catch (error) {
//             console.log(error)
//         }
//     })()
// }
//????????????????????????????????????
// 10)
// Generics avançados com índices de tipo:
// Crie uma função genérica chamada pluck que aceita um array de objetos 
// e uma chave. A função deve retornar um array contendo os valores 
// correspondentes à chave especificada.
{
    console.log('teste');
    function pluck(items, key) {
        return items.map(item => item[key]);
    }
    const objetos = [
        { id: 1, nome: 'item 1', valor: 10 },
        { id: 2, nome: 'item 2', valor: 20 },
        { id: 3, nome: 'item 3', valor: 30 }
    ];
    console.log(pluck(objetos, 'id'));
    console.log(pluck(objetos, 'nome'));
    console.log(pluck(objetos, 'valor'));
}
//# sourceMappingURL=exGnerics.js.map