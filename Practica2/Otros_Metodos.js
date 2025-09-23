const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "María", edad: 28 }
];
const nombre = personas.find(per => per.nombre === "Luis");
console.log(nombre);
// con find especificamos lo que queremos y nos devuelve el primer elemento que cumple con esa condicion
//como se menciono en la exposicion

personas.forEach(per => {
    console.log(per.nombre + " tiene " + per.edad + " años");
});
//usamos forEach para buscar en el array y mostrar el nombre y la edad de cada persona especificando cada parametro
const suma = personas.reduce((total, p) => total + p.edad, 0);
console.log("La suma de todas las edades es: " + suma);
// con reduce acumulamos las edades y sumamos cada una al total
// (iniciando desde 0), y así obtenemos la suma de todas las edades