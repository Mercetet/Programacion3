//2
console.log("Ejercicio 2: corriendo desde typescript");

//3
const texto: string = "Hola, TypeScript!";
const num: number = 123;
const bool: boolean = true;
const fecha: Date = new Date();

const divDatos = document.getElementById("datos");
if(divDatos){
    divDatos.innerHTML = `
    <p>${texto}</p>
    <p>${num}</p>
    <p>${bool}</p>
    <p>${fecha}</p>
    `;
}else{
    console.log("No se encontro el div de datos");
}

//4
function numeroACadena(num: number): string{
    return num.toString();
}

const divNumCadena = document.getElementById("numeroCadenaDiv");
if(divNumCadena){
    divNumCadena.innerHTML = `
    <p>Numero convertido a cadena: ${numeroACadena(456)}</p>
    `;
}else{
    console.log("No se encontro el div de numero a cadena");
}

//5
const array: number[] = [1, 2, 3, 4, 5];
function sumarArray(array: number[]): number{
    let suma: number = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
const suma = sumarArray(array);

const divSumaArray = document.getElementById("sumaArrayDiv");
if(divSumaArray){
    divSumaArray.innerHTML = `
    <p>Suma del array: ${sumarArray(array)}</p>
    `;
}else{
    console.log("No se encontro el div de suma array");
}

//6
const estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas",
};

const divEstudiante = document.getElementById("estudianteDiv");
if(divEstudiante){
    divEstudiante.innerHTML = `
    <p>Estudiante: ${estudiante.nombre}</p>
    <p>Edad: ${estudiante.edad}</p>
    <p>Curso: ${estudiante.curso}</p>
    `;
}else{
    console.log("No se encontro el div de estudiante");
}

//7
type direccion = {
    calle: string;
    ciudad: string;
    CP: number;
};

const direccion: direccion = {
    calle: "Av. Principal",
    ciudad: "Ciudad",
    CP: 12345,
};

const divDireccion = document.getElementById("direccionDiv");
if(divDireccion){
    divDireccion.innerHTML = `
    <p>Calle: ${direccion.calle}</p>
    <p>Ciudad: ${direccion.ciudad}</p>
    <p>CP: ${direccion.CP}</p>
    `;
}else{
    console.log("No se encontro el div de direccion");
}

//8
interface usuario{
    nombre: string;
    correo: string;
    saludar(): string;
}

const usuario: usuario = {
    nombre: "Ana",
    correo: "a@a.com",
    saludar: function(){
        return "Hola, mi nombre es " + this.nombre;
    }
}

const divUsuario = document.getElementById("usuarioDiv");
if(divUsuario){
    divUsuario.innerHTML = `
    <p>${usuario.saludar()}</p>
    `;
}else{
    console.log("No se encontro el div de usuario");
}

//9
class Persona{
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    presentar(): string{
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

const persona: Persona = new Persona("Carlos", 30);

const divPersona = document.getElementById("personaDiv");
if(divPersona){
    divPersona.innerHTML = `
    <p>${persona.presentar()}</p>
    `;
}else{
    console.log("No se encontro el div de persona");
}

//10
class Caja <T>{
    valor: T;

    constructor(valor: T){
        this.valor = valor;
    }

    obtenerValor(): T{
        return this.valor;
    }

    setValor(valor: T): void{
        this.valor = valor;
    }
}

const cajaDeTexto: Caja<string> = new Caja("Hola");
const valorCajaString = cajaDeTexto.obtenerValor();

const divCajaTexto = document.getElementById("cajaT1Div");
if(divCajaTexto){
    divCajaTexto.innerHTML = `
    <p>Contenido de cajaDeTexto ${valorCajaString}</p>
    `;
}else{
    console.log("No se encontro el div de caja");
}

cajaDeTexto.setValor("Adios");
const valorCajaString2 = cajaDeTexto.obtenerValor();

const divCajaTexto2 = document.getElementById("cajaT2Div");
if(divCajaTexto2){
    divCajaTexto2.innerHTML = `
    <p>Contenido de cajaDeTexto ${valorCajaString2}</p>
    `;
}else{
    console.log("No se encontro el div de caja");
}

const cajaDeNumero: Caja<number> = new Caja(123);
const valorCajaNumero1 = cajaDeNumero.obtenerValor();

const divCajaN1 = document.getElementById("cajaN1Div");
if(divCajaN1){
    divCajaN1.innerHTML = `
    <p>Contenido de cajaDeNumero ${valorCajaNumero1}</p>
    `;
}else{
    console.log("No se encontro el div de caja");
}

cajaDeNumero.setValor(456);
const valorCajaNumero2 = cajaDeNumero.obtenerValor();

const divCajaN2 = document.getElementById("cajaN2Div");
if(divCajaN2){
    divCajaN2.innerHTML = `
    <p>Contenido de cajaDeNumero ${valorCajaNumero2}</p>
    `;
}else{
    console.log("No se encontro el div de caja");
}

//11
function identiad<T>(valor: T): T{
    return valor;
}

const divIdentidad = document.getElementById("identidadDiv1");
if(divIdentidad){
    divIdentidad.innerHTML = `
    <p>Identidad del texto: ${identiad("texto")}</p>
    `;
}else{
    console.log("No se encontro el div de identidad");
}

const divIdentidad2 = document.getElementById("identidadDiv2");
if(divIdentidad2){
    divIdentidad2.innerHTML = `
    <p>Identidad del numero: ${identiad(789)}</p>
    `;
}else{
    console.log("No se encontro el div de identidad");
}

const divIdentidad3 = document.getElementById("identidadDiv3");
if(divIdentidad3){
    divIdentidad3.innerHTML = `
    <p>Identidad del boolean: ${identiad(false)}</p>
    `;
}else{
    console.log("No se encontro el div de identidad");
}

const divIdentidad4 = document.getElementById("identidadDiv4");
if(divIdentidad4){
    divIdentidad4.innerHTML = `
    <p>Identidad de la fecha: ${identiad(new Date())}</p>
    `;
}else{
    console.log("No se encontro el div de identidad");
}

//12
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

const divColor = document.getElementById("colorDiv");
if(divColor){
    divColor.innerHTML = `
    <p>Color favorito: ${Color.Azul}</p>
    `;
}else{
    console.log("No se encontro el div de color");
}