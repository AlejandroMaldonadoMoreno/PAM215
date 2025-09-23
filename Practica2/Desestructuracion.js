const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "mx"
    }
};

//aqui se aplica la desestructuracion
const {nombre, edad, direccion: {ciudad, pais}} = persona;
//definimos cada variable con el nombre del atributo y especificamos
//la ruta en caso de que sea un objeto anidado, en este caso es direccion
// con sus atributos ciudad y pais

console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ", " + pais + ".");
//se define el mensaje pedido en la practica