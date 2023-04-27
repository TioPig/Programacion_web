function sumar(n1, n2){
    let resultado = n1 + n2;

    return resultado
}

let res = sumar(4, 6);
console.log(res);

function saludoP(){
    let nombre = document.getElementById('nombre');
    // console.log(nombre.value);
    // alert("Hola: " + nombre.value);

    let = mensaje = "Bienvenido al Himalaya " + nombre.value

    document.getElementById("nono").value = mensaje;
}

function mostrarEdad(){
    let edad = document.getElementById("edad");

    let mensaje = "La edad es " + edad.value;

    document.getElementById("resedad").innerHTML = mensaje;
}


// let boton = document.getElementById("apretame");

// boton.addEventListener(
//     `click`,
//     function(){
//         alert("me apretaste")
//     }
// )