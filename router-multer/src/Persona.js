export default class Persona{
    constructor({dni, nombre, ciudad}){
        if(!dni) throw new Error('No hay una DNI')
        this.dni = dni

        if(!nombre) throw new Error('No hay nombre')
        this.nombre = nombre

        if(!ciudad) throw new Error('No hay ciudad')
        this.ciudad = ciudad
    }
}