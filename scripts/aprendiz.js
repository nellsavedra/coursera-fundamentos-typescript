export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
export class Aprendiz {
    constructor(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    darCursosCertificados() {
        let totalCursosC = 0;
        for (let i = 0; i < this.cursos.length; i++) {
            let curso = this.cursos[i];
            if (curso.certificado) {
                totalCursosC += 1;
            }
        }
        return totalCursosC;
    }
}
