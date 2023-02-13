const {
    promises:{
        readFile, // lee un archivo
        writeFile, // escribe un archivo
        appendFile, // agrega contenido a un archivo
        rm, // (remove) borra un archivo
        readdir // lee el directorio
    }
} = require('fs')

async function main(){
    try{
        const archivoTimer = await readFile('C:/Users/emanu/Documents/Backend-Coder/manejo archivos/timers.txt','utf-8') // archivo, codificacion
        console.log(archivoTimer)
    }catch(error){
        console.log(error.message)
    }
    
    try{
        await writeFile('C:/Users/emanu/Documents/Backend-Coder/manejo archivos/timers.txt','buenas buenas mi perro')// archivo, texto
    }catch(error){
        console.log(error.message)
    }
    
    try{
        await appendFile('C:/Users/emanu/Documents/Backend-Coder/manejo archivos/timers.txt','Agregando texto')// archivo, texto
    }catch(error){
        console.log(error.message)
    }
    
    await rm('C:/Users/emanu/Documents/Backend-Coder/manejo archivos/timers.txt')
    
    try{
        console.log(await readdir('./'))
    } catch(error){
        console.log(error)
    }
}

main()