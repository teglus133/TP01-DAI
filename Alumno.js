
export class Alumno {
    constructor (username,DNI) {
        this.username = username;
        this.DNI = DNI;
    }
    mostrar() {
        console.log("Nombre: " + this.username + " DNI: " + this.DNI); 
    }
}  
