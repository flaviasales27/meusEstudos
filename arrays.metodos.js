let listaNumeros = [1,2,3,4,5,6,7,8];

//map

let listaNumerosDobro = listaNumeros.map(function(valor,index){
    return valor * 2;
});

console.log(listaNumerosDobro);

//filter 

let listaNumerosFiltrados = listaNumeros.filter(function(valor,index){
    return valor > 6;
});
console.log(listaNumerosFiltrados);

//reduce

let listaNumerosSomados = listaNumeros.reduce(function(resultado,valor){
    return resultado + valor;
});
console.log(listaNumerosSomados);

//forEach

listaNumeros.forEach(function(valor,index){
    console.log("o valor é: " + valor + "e a sua posição é: " + index);
})