let pessoa = {
    nome : 'Eliane',
    idade: 26,
    altura: 1.78
}

let json = JSON.stringify(pessoa);


let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);