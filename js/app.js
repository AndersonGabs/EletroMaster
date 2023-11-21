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
let containerProdutos = document.getElementById('containerProdutos')
function carregarContainer() {

    containerProdutos.innerHTML = ''

    for (let i = 0; i < dados.length; i++) {



        if(i % 2 == 0){

            containerProdutos.innerHTML += `
            <div class="col-lg-3 col-md-4 col-6 mb-3 pb-5" data-aos="fade-up"    data-aos-duration="1000"  data-aos-offset="300">
            <div class="card h-80 text-center ">
              <img src="${dados[i].url}" class="card-img-top p-3 bg-white" alt="...">
              <div class= "card-header bg-dark text-white">
              ${dados[i].valor}
              </div>
              <div class="card-body ">
                <h5 class="card-title text-success" style="font-weight: bold">${dados[i].produto}</h5>
                <p class="card-text ">${dados[i].descricao}</p>
              </div>
              <div class="card-footer text-body-secondary bg-warning "> 
                <small " >${dados[i].categoria}</small>
              </div>
            </div>
            `
       
        }else{

            containerProdutos.innerHTML += `
            <div class="col-lg-3 col-md-4 col-6 mb-3 pb-5" data aos="fade-up-right"    data-aos="zoom-in" data-aos-duration="1000"  data-aos-offset="300">
            <div class="card h-80 text-center ">
              <img src="${dados[i].url}" class="card-img-top p-3 bg-white " alt="...">
              <div class= "card-header bg-dark text-white">
              ${dados[i].valor}
              </div>
              <div class="card-body">
                <h5 class="card-title text-success" style="font-weight: bold">${dados[i].produto}</h5>
                <p class="card-text">${dados[i].descricao}</p>
              </div>
              <div class="card-footer bg-warning text-body-secondary">
                <small>${dados[i].categoria}</small>
              </div>
            </div>
            `
        }
    




        


    }


}

carregarContainer()
