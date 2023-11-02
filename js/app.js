function mostraHora(){
    let dataAtual = new Date()
    
    let hora = dataAtual.getHours().toString().padStart(2,'0')
    let minuto = dataAtual.getMinutes().toString().padStart(2,'0')
    let seg = dataAtual.getSeconds().toString().padStart(2,'0')
    
    //document.getElementById("relogio").innerHTML = `${hora};${minuto};${Seg}`
    document.querySelector('#relogio').innerHTML= `${hora}:${minuto}:${seg}`
    
    }
    mostraHora()
    setInterval(
        mostraHora,
        100
    )
    