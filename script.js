let persona = [];
function nuevapersona() {
let persona = {}
persona.nombre = prompt("Nombre :")
persona.apellido = prompt("Apellido :")
persona.cedula = prompt("Identificacion :")
persona.rne = prompt("año de nacimiento: ")
return persona;
}

console.table(
   
    { "Nombre ":  persona.nombre,
    "Apellido ": persona.apellido,
    "Mes de cumple" : persona.cedula,
    "ano de naciomiento": persona.rne
    }

);


console.log(persona);
