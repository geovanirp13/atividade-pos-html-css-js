/** 1 - Declarando Função**/
function soma(numero1, numero2) {
  return numero1 + numero2;
}

//var total = soma(1, 2);
//console.log(total);

/** 2 - Declarando Função**/
const novaSoma = function (numero1, numero2) {
  return numero1 + numero2;
};

//var total = soma(2, 2);
//console.log(total);

/** 3 - Declarando Função Arrow function**/
const novaSoma3 = (n1, n2) => {
  return n1 + n2;
};

//var total = soma(11, 2);
//console.log(total);

let obj = {};
obj.nome = 'Geovani';
obj.idade = 25;
obj.somaIdade = function (valor) {
  this.idade += new Number(valor);
};

obj.soma = function (n1, n2) {
  return n1 + n2;
}

obj.somaIdade('15');
var total = obj.soma(10, 5);

console.log(total);
console.log(obj);

