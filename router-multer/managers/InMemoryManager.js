class InMemoryManager {
    constructor(){
        this.elementos = []
    }

    guardar(elemento){
        this.elementos.push(elemento)
        return elemento
    }

    recuperarTodoSegunCriterio({campo, valor}={}){
        if(!campo){
            return this.elementos
        }else{
            return this.elementos.filter(e=>{
                return e[campo] === valor
            })
        }    
    }

    recuperarUnoSegunIdentificado({campo, valor}){
        return this.elementos.find(e => e[campo] === valor)
    }
}

export const inMemoryManager = new InMemoryManager