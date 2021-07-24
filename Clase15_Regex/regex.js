// EJERCICIOS - RegExp
// En los siguientes ejercicios se pide validar un formulario, que se enviará por post, en el que haya tres campos: email, contraseña y raza. En el caso de la raza, será un input de tipo datalist, en el que aparecerán las categorías humano, elfo, enano y hobbit.

// 1. Validación de Email
// Necesitamos validar estos campos con expresiones regulares según estas condiciones:

// Para el nombre del correo (ej. laura12):
// Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail):
// Que tenga @
// Que tenga solo letras, y al menos tres caracteres Para el dominio padre (ej. .es .com .org)
// Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…)
// Debe ir al final, detrás de un punto
// *La expresión regular sería algo como: expresionregular@expresionregular.expresionregular. Ej: elena@gmail.com; pepe03@hotmail.es Crearemos un formulario que llamará a la función checkEmail. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor del email recogido.
// Patrón RegExp: expresionregular@expresionregular.expresionregular
let email = document.querySelector("#email");
const checkEmail = email => {
    let regex = /[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/;   
    return email.match(regex) ? true : false;
};// Perfecta



email.addEventListener("input", () => {
    let emailText = email.value;
    checkEmail(emailText) ? email.style.backgroundColor = "lightgreen":
    email.style.backgroundColor = "salmon"; 
});

let psw = document.querySelector("#psw");
const checkPsw = psw => {
    let regex = /^[A-Za-z0-9][A-Za-z0-9!@#$%&]{5,19}$/g;
    return psw.match(regex);
};// Perfecta

psw.addEventListener("input", () => {
    let pswText = psw.value;
    checkPsw(pswText) ? psw.style.backgroundColor = "lightgreen":
    psw.style.backgroundColor = 'salmon';
});

let race = document.querySelector("#race");
const checkRace = race => {
    let regex = /elfo$|humano$|hobbit$|enano$/gi;
    return race.match(regex);
};

race.addEventListener("input", () => {
    let raceText = race.value;
    checkRace(raceText) ? race.style.backgroundColor = "lightgreen":
    race.style.backgroundColor = 'salmon';
});

let button = document.querySelector("#submit");
button.addEventListener("click", () => {
    if(!checkEmail(email.value) || !checkPsw(psw.value) || !checkRace(race.value)){
        event.preventDefault();
        button.style.backgroundColor = "salmon";

    }else {
        button.style.backgroundColor = "lightgreen";
    };
});








