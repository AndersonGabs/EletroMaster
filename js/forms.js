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


let btnExibir = document.getElementById('exibir')
let btnAgendar = document.getElementById('btnAgendar')
let div = document.getElementById('divExibir')
// criando um array
let arrayOrdemServiço = [];
// 
function agendar() {
    let ordemServiço = {
        nome: document.getElementById('nome').value,
        tel: document.getElementById('tel').value,
        cep: document.getElementById('cep').value,
        numero: document.getElementById('numero').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        tipoServiço: document.getElementById('tipoServiço').value,
        aparelho: document.getElementById('aparelho').value,
        defeito: document.getElementById('defeito').value,
        data: document.getElementById('data').value,
        

    }
    if (ordemServiço.tipoServiço == "0") {
        alert("selecione um tipo de serviço")
    } else {
        arrayOrdemServiço.push(ordemServiço);
    }
    console.log(arrayOrdemServiço)
    // let nomeInput = document.getElementById('nome').value
    // nomes.push(nomeInput)
    
    limparForm()

}

function imprimir() {
    div.innerHTML = "";
    for (let i = 0; i < arrayOrdemServiço.length; i++) {
        div.innerHTML += ` 
        <p class="text-center"><strong> Ordem Nº${i+1} </strong> <br><p>
        <p class= "mb-5 alert alert-light">
        <strong> Nome: </strong> ${arrayOrdemServiço[i].nome}<br>
        <strong> Telefone: </strong> ${arrayOrdemServiço[i].tel}<br>
        <strong> Cep </strong> ${arrayOrdemServiço[i].cep}<br>
        <strong> Rua: </strong> ${arrayOrdemServiço[i].rua}<br>
        <strong> Número: </strong> ${arrayOrdemServiço[i].numero}<br>
        <strong> Bairro: </strong> ${arrayOrdemServiço[i].bairro}<br>
        <strong> Cidade: </strong> ${arrayOrdemServiço[i].cidade}<br>
        <strong> Estado: </strong> ${arrayOrdemServiço[i].estado}<br>
        <strong> Tipo de Serviço: </strong> ${arrayOrdemServiço[i].tipoServiço}<br>
        <strong> Aparelho: </strong> ${arrayOrdemServiço[i].aparelho}<br>
        <strong> Defeito: </strong> ${arrayOrdemServiço[i].defeito}<br>
        <strong> Data: </strong> ${arrayOrdemServiço[i].data}<br></p>
        `
    }
}

    function limparForm() {
        document.getElementById('nome').value = "";
        document.getElementById('tel').value = "";
        document.getElementById('cep').value = "";
        document.getElementById('rua').value = "";
        document.getElementById('numero').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('estado').value = "";
       
        document.getElementById('aparelho').value = "";
        document.getElementById('defeito').value = "";
        document.getElementById('data').value = "";
        document.getElementById('nome').focus();
    }

btnAgendar.addEventListener("click", agendar)
btnExibir.addEventListener("click",imprimir)
