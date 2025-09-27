function simularPeticionAPI() {
    return new Promise(resuelto =>{
        setTimeout(() => {
            resuelto("Datos recibidos correctamente");
        }, 5000);
    })
}
async function ObtenerDatos() {
    try{
        const datos = await simularPeticionAPI();
        console.log(datos)  ;
    }catch (error){
        console.error("Error al obtener los datos:", error);
    }
}

ObtenerDatos();