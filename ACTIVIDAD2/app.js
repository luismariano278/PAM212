// Paso 2: Hacemos la clase
class inicioPAM {
  ReglamentoPAM() {
    return ` Reglamento:
  1. 80% asistencia y 80% trabajos en clase.
  2. 10 min de tolerancia (7:00 y 14:00).
  3. Faltas justificadas en 24h con correo institucional.
  4. Tareas solo en Classroom, no extemporáneas.
  5. Plagio = reprobado y reporte.
  6. Respeto y disciplina obligatorios.
  7. Prohibido: audífonos, comida y columpiarse en sillas.`;}

  LineamientosClassroom() {
    return   ` Lineamientos del Classroom:
  - Revisar avisos diariamente.
  - Subir tareas en PDF, individuales.
  - Usar correo institucional siempre.
  - Retroalimentación en entrega de calificaciones.`;}

  FechasdeParciales() {
   return ` Fechas de parciales:
  - 1er Parcial: 30 de Septiembre
  - 2do Parcial: 04 de Octubre
  - 3er Parcial: 02 de Noviembre
  - Entrega de actas y retroalimentación: 08 de Diciembre `;}

  PorcentajesporParcial() {
  return ` Evaluación por tipo de evidencia:

  Evidencia de Conocimiento:
  - 1er Parcial: 40%
  - 2do Parcial: 40%
  - 3er Parcial: 20%

  Evidencia de Desempeño:
  - 1er Parcial: 20%
  - 2do Parcial: 20%
  - 3er Parcial: 10%

  Evidencia de Producto:
  - 1er Parcial: 30%
  - 2do Parcial: 20%
  - 3er Parcial: 40%

  Proyecto Integrador:
  - 1er Parcial: 10%
  - 2do Parcial: 20%
  - 3er Parcial: 30% `;}
}

// Paso 3: Creamos un objeto de la clase
const materia = new inicioPAM();

// Paso 4: Hacemos funciones que usan los métodos de la clase
function verReglamento() {
  document.getElementById("resultado").innerText = materia.ReglamentoPAM();
}

function verLineamientos() {
  document.getElementById("resultado").innerText = materia.LineamientosClassroom();
}

function verFechas() {
  document.getElementById("resultado").innerText = materia.FechasdeParciales();
}

function verPorcentajes() {
  document.getElementById("resultado").innerText = materia.PorcentajesporParcial();
}
