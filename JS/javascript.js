
function initialize() {   
    itensMenu()    
    
    

    /*setInterval( () => {
             dataHora()
        }, 0)*/
              
}

function itensMenu() {
    const itens = document.querySelector('#sorte');
    const menu = document.querySelector('.menu');
    const dentro = document.getElementById('dentro')
    console.log(dentro)
    
    itens.addEventListener('mouseover', () => {
      menu.style.display = 'block';
    });
    
    dentro.addEventListener('mouseover', (e)=> {
        console.log('passei', e)
        menu.style.display = 'none';
        
      })
    
  }
  

 
/*function dataHora () {
    const display = document.getElementById('dataHora')
    const hora = new Date().toLocaleTimeString("pt-BR")
    
    display.innerHTML = 'Time: ' + hora
}*/


    
    
    
   

  


