//1. Introduccion. 
//Ej 2
/*let a = 1;
let b = 5;
let c = a+b;

console.log("La suma de a y b es: " + c);

//Ej 3
let name = prompt("Ingrese su nombre: ");

console.log("Hola, "+ name);*/

//2. Operadores logicos y condicionales
//Ej 1
/*let a = 10;
let b = 5;
let c = 3;
let mayor = a;

if (b> mayor){
  mayor=b;
} else if (c>mayor){
  mayor=c;
}

console.log("El mayor de los números es: " + mayor);

//Ej 2
let num = prompt("Ingrese un numero y dire si es par o impar: ");

if (num%2 == 0){
  console.log("El numero " + num + " es par.")
}else{
  console.log("El numero " + num + " es impar.")
}*/

//3. Operadores de asignación y bucles
//Ej 1
/*let ten = 10;

while (ten != 0){
  console.log(ten);
  ten -= 1;
}

//Ej 2
let num;

do {
  num = prompt("Ingrese un numero mayor a 100:");
}while(num <100)

console.log("El numero mayor a 100 ingresado es: " + num);*/

//4. Funciones de JavaScript
//Ej 1
/*let num = prompt("Ingrese un numero para verificar si es par.")

const esPar = (num) => {
  if (num%2 == 0){
    return true;
  }else{
    return false;
  }
}

console.log("El numero " + num + " es par? " + esPar(num))

//Ej 2
const convertirCelsiusAFahrenheit = (c) => {
  console.log(c + "°C son equivalentes a " + (c * 1.8 + 32) + "°F.");
}

let c = prompt("Ingrese los grados celsius: ");
convertirCelsiusAFahrenheit(c);*/

//5. Objetos en JavaScript
//Ej 1
/*let persona = {
  nombre: "Mercedes",
  edad: 19,
  ciudad: "Mendoza",
}

console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

const cambiarCiudad = (actualizada) => {
  return persona.ciudad = actualizada;
}

console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + cambiarCiudad("Buenos Aires"));

//Ej 2
let libro = {
  titulo: "El Quijote",
  autor: "Cervantes",
  ano: 1605,
}

let libro2 = {
  titulo: "Alas de sangre",
  autor: "Rebecca Yarros",
  ano: 2023,
}

const esAntiguo = (libro) => {
  if (libro.ano < 2014){
    console.log("El libro " + libro.titulo + " es antiguo? " + true);
  }else{
    console.log("El libro " + libro.titulo + " es antiguo? " + false);
  }
}

esAntiguo(libro);
esAntiguo(libro2);*/

//6. Arrays
//Ej 1
/*let numeros = [1,2,3,4,5,6,7,8,9,10];

console.log("Numeros originales: " + numeros);

let newArray = [];
let cont = 0

for (let i = 0; i < numeros.length; i++) {
  newArray.push(numeros[i] * 2);
}

console.log("Numeros multiplicados por 2: " + 
  newArray
);

//Ej 2
let pares = [];

for (let i = 0; i <= 20; i++) {
  if (i%2 == 0 && i != 0){
    pares.push(i);
  }
}

console.log("Primeros 10 numeros pares: "
  + pares
);*/

//7. Introducción al DOM
//Ej 1
/*const textContent = document.getElementById("parrafo")
const button = document.getElementById("cambioColor");

const hadleStyleText = () =>{
  textContent.classList.add("blueText")
}

button.addEventListener("click", () => {
  hadleStyleText();
})

//Ej2
const alertar = document.getElementById("alertar");

const getDataInput = () =>{
  const form = document.getElementById("form").value;

  alert("Usted ingreso: " + form);
}

alertar.addEventListener("click", () => {
  getDataInput();
})*/

// 8. Eventos en DOM
//Ej 1
/*const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuarto = document.getElementById("cuarto");

const print = (element) => {
  console.log(element.textContent);
}

uno.addEventListener("click", () =>{
  print(uno);
})

dos.addEventListener("click", () =>{
  print(dos);
})

tres.addEventListener("click", () =>{
  print(tres);
})

cuatro.addEventListener("click", () =>{
  print(cuatro);
})

//Ej 2
const deshabilitar = document.getElementById("deshabilitar");
const habilitar = document.getElementById("habilitar");
const campo = document.getElementById("campo");

deshabilitar.addEventListener("click", () =>{
  campo.disabled = true;
  campo.classList.add("deshabilitar");
})

habilitar.addEventListener("click", () =>{
  campo.disabled = false;
  campo.classList.remove("deshabilitar");
})*/

// 9. LocalStorage 
/*document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput", JSON.stringify);
  const emailDisplay = document.getElementById("emailDisplay");

  function displayEmial(email) {
    emailDisplay.innerHTML = `
    <p>${email}</p>
    <button id="deleteEmail">Eliminar</button>
    `;

    document.getElementById("deleteEmail").addEventListener("click", function(){
      localStorage.removeItem("email");
      emailDisplay.innerHTML = "";
    });
  }

  const storedEmail = localStorage.getItem("email");
  if(storedEmail){
    displayEmial(storedEmail);
  }

  emailForm.addEventListener("submit", function(event){
    event.preventDefault();
    const email = emailInput.value;
    localStorage.setItem("email", email);
    displayEmial(email);
    emailInput.value = "";
  });
});*/

