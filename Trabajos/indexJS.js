class inicioPAM {

    Reglamento_POO(){
        return `
        <ol>
            <li> Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.</li>
            <li> Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de inicio: 7:00 a.m y 14:00 p.m).</li>
            <li> Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores...</li>
            <li> Las tareas y trabajos deberán subirlas al Classroom de forma individual...</li>
            <li> Las tareas y trabajos presentarlos en tiempo y forma...</li>
            <li> Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.</li>
            <li> El plagio o copia de trabajos y/o exámenes...</li>
            <li> Cualquier deshonestidad académica será sancionada...</li>
            <li> En circunstancia de indisciplina o falta de respeto...</li>
            <li> Uso de laptops y/o dispositivos móviles quedará limitado...</li>
            <li> Prohibido el uso de audífonos durante la clase.</li>
            <li> Prohibido comer y/o tomar líquidos en el salón.</li>
            <li> Prohibido sentarse encima de las mesas...</li>
            <li> Todo tema académico debe ser revisado primeramente...</li>
            <li> Cualquier situación no prevista en el presente reglamento...</li>
            <li> El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes...</li>
            <li> Este reglamento entra en vigor después de que se firme...</li>
        </ol>`;
    }

    LineamientosClassroom (){
        return `
        <ul>
            <li> Portada libre con logo de la UPQ</li>
            <li> Datos del alumno y materia</li>
            <li> Conclusión de aprendizaje</li>
            <li> Archivo en PDF</li>
        </ul>`;
    }

    FechasdeParciales(){
        return `
        <ul>
            <li> 1er Parcial: 29-09-25</li>
            <li> 2do Parcial: 03-11-25</li>
            <li> 3er Parcial: 01-12-25</li>
            <li> Examen Final: 08-12-25</li>
        </ul>`;
    }

    PorcentajesporParcial(){
        return `
        <div>
            <h3> 1er Parcial</h3>
            <ul>
                <li> Evidencia de Conocimiento: 40%</li>
                <li> Evidencia de Desempeño: 20%</li>
                <li> Evidencia de Producto: 30%</li>
                <li> Proyecto Integrador: 10%</li>
            </ul>
            
            <h3> 2do Parcial</h3>
            <ul>
                <li> Evidencia de Conocimiento: 40%</li>
                <li> Evidencia de Desempeño: 20%</li>
                <li> Evidencia de Producto: 20%</li>
                <li> Proyecto Integrador: 20%</li>
            </ul>
            
            <h3> 3er Parcial</h3>
            <ul>
                <li> Evidencia de Conocimiento: 20%</li>
                <li> Evidencia de Desempeño: 10%</li>
                <li> Evidencia de Producto: 40%</li>
                <li> Proyecto Integrador: 30%</li>
            </ul>
        </div>`;
    }

}


const PAM215 = new inicioPAM();
const container = document.getElementById('contenedor');

document.getElementById('btn1').onclick = () => {
  container.innerHTML = PAM215.Reglamento_POO();
  container.style.textAlign = "left";
  container.style.fontSize = "20px";

}

document.getElementById('btn2').onclick = () => {
    container.innerHTML = PAM215.LineamientosClassroom();
    container.style.textAlign = "left";
    container.style.fontSize = "20px";
}

document.getElementById('btn3').onclick = () => {
    container.innerHTML = PAM215.FechasdeParciales();
    container.style.textAlign = "left";
    container.style.fontSize = "20px";
}

document.getElementById('btn4').onclick = () => {
    container.innerHTML = PAM215.PorcentajesporParcial();
    container.style.textAlign = "left";
    container.style.fontSize = "20px";
}

