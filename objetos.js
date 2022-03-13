

let carro = {
    marca: "Fiat",
    modelo: "Uno",
};

function Carro(valorMarca,ValorModelo) {
    this.marca = valorMarca;
    this.modelo = ValorModelo;
}
console.log(carro);
console.log(new.carro("Volks","Fusca"));