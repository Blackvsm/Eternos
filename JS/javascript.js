function initialize() {   
    dataHora()    
    click()
    setInterval( () => {
             dataHora()
        }, 0)
              
}

function dataHora () {
    const display = document.getElementById('dataHora')
    const hora = new Date().toLocaleTimeString("pt-BR")
    
    display.innerHTML = 'Time: ' + hora
}

    
    function click () {
        const botton = document.querySelectorAll('.caixa')
        const chute = document.getElementsByClassName('caixa')[1]
        
        
        botton.forEach(btn=> {
            btn.addEventListener('click', e => {
                chute.play()
                console.log(e)
            })
            console.log(btn)
        })

    }
    
    
    
   

  


