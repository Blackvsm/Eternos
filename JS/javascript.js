
function initialize() {   
    itensMenu()    
    
    

    /*setInterval( () => {
             dataHora()
        }, 0)*/
              
}
let barraOnOff = document.querySelector('.menu');

function displayOff() {
    barraOnOff.style.display = 'none';
}

function displayOn() {
    barraOnOff.style.display = 'block';
}

function itensMenu() {
    let clickBarraItens = document.getElementById('sorte');
    let dentroMain = document.getElementById('dentro');

    dentroMain.addEventListener('click', () => {
        if (barraOnOff.style.display === 'block') {
            displayOff();
        }
    });

    clickBarraItens.addEventListener('click', () => {
        if (barraOnOff.style.display === 'block') {
            displayOff();
        } else {
            displayOn();
        }
    });
}
  


 
/*function dataHora () {
    const display = document.getElementById('dataHora')
    const hora = new Date().toLocaleTimeString("pt-BR")
    
    display.innerHTML = 'Time: ' + hora
}*/


    
    
    
   

  


