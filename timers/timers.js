function callback(){
    console.log('hola mundo!')
}

const timer1 = setTimeout(callback,4000) // callback , tiempo de espera
const interval1 = setInterval(callback,4000) // callback, tiempo de espera pero lo va a repetir cada x tiempo de espera

clearTimeout(timer1) //cancela timeout
clearInterval(interval1) //cancelar interval