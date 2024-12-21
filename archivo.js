function Suma() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = num1 + num2;

  document.getElementById("resultado").value = resultado;

}
function Resta() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = num1 - num2;

  document.getElementById("resultado").value = resultado;

}

function Multiplicacion() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = num1 * num2;

  document.getElementById("resultado").value = resultado;
}

function Division() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = num1 / num2;

  document.getElementById("resultado").value = resultado;
}

function RaizCuadrada() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.sqrt(resultado);
}

function Potencia() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let resultado = num1 ** num2;

  document.getElementById("resultado").value = resultado;
}

function Vabsoluto() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.abs(resultado);
}

function Random() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.random(resultado);
}

function round() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.round(resultado);
}

function floor() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.floor(resultado);
}

function ceil() {
  let resultado = Number(document.getElementById("resultado").value);
  document.getElementById("resultado").value = Math.ceil(resultado);
}


















