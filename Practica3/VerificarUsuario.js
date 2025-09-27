function verificarUsuario(susuario) {
    return new Promise((aceptado, error) => {
    if(susuario === "admin") {
        aceptado("Usuario correcto");
    }else{
    error("Usuario incorrecto");}
    });
//Usamos return para regresar directameinte la promesa
    //junto con "aceptado" y "error" como parametros de nuetsra promise
    //usamos if para verificar si el usuario es "admin" o no
    //y por ultimo mostrar mensaje en consola si es aceptado o error
}
 verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.log(err));
verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.log(err));
