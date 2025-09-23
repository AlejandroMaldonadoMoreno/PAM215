const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];
const pro = productos.filter(pro => pro.precio > 1000);
console.log(pro);
//se utiliza el metodo map para buscar en el arreglo y
//verifica si el precio de cada producto es mayor a 1000 y tambien
//indican si cada producto cumple con la condicion y los imprime con su nombre .
const produ = productos.map(pro => pro.nombre );
console.log(produ);
//se utiliza el map para obtener un nuevo arreglo
//donde solo salen los nombres de los productos y los imprime.