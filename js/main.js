import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
let cursos = [
    new Curso("Practicas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de Software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020),
];
export const ap = new Aprendiz("Andrés", "Valle", "./img/avatar.png", 29, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
let aprendizTable = document.getElementById("aprendiz");
let estadisticasTable = document.getElementById("estadisticas");
let cursosTable = document.getElementById("cursos");
let btnFiltro = document.getElementById("boton-filtro");
let textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = filtrarPorNombre;
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function filtrarPorNombre() {
    let text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrado = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrado);
}
function mostrarDatosAprendiz(aprendiz) {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `
	<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
	<tr><td>Nombre:</td><td>${aprendiz.nombres}</td></tr>
	<tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
	<tr><td>Nivel Educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
	<tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>
	`;
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    let numeroCertificados = aprendiz.darCursosCertificados();
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
	<td><b>Cursos certificados</b></td><td>${numeroCertificados}</td>
	`;
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    let cursosTbody = document.createElement("tbody");
    let estado = cursos.map(c => (c.calificacion > 60) ? "green" : "red");
    let index = 0;
    for (let curso of cursos) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
		<td>${curso.nombre}</td>
		<td>${curso.horas}</td>
		<td style="color:${estado[index]}">${curso.calificacion}</td>
		<td>${curso.certificado}</td>
		<td>${curso.year}</td>
		`;
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}
