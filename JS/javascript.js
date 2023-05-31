
function initialize() {   
    itensMenu()    
    somClick()
    clickMenu()

    /*setInterval( () => {
             dataHora()
        }, 0)*/
              
}

function itensMenu() {
    itens = document.querySelector('#sorte')
    itens.addEventListener('mouseover', (e)=>{
    console.log(e)
        
    if (menu.style.display === 'block') {
            menu.style.display = 'none'
        
    } else {
            menu.style.display = 'block'
        }
    })
}


/*function clickMenu() {


    if (menu.style.display === 'block') {
        menu.style.display = 'none'
    
    } else {
        menu.style.display = 'block'
    }
    somClick() 
}*/
 
/*function dataHora () {
    const display = document.getElementById('dataHora')
    const hora = new Date().toLocaleTimeString("pt-BR")
    
    display.innerHTML = 'Time: ' + hora
}*/

function somClick () {
    const clickSom = document.querySelector('#SomClick')
    
    const clickMenu = document.querySelector("#menu")
    
    clickMenu.addEventListener('onclick onkeypress', e=> {
        console.log(e)
    })
    

}
    
    
    
   

  


