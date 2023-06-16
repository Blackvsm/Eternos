const enviarBtn = document.querySelector('#enviarBtn');

enviarBtn.addEventListener('click', obterDadosFormulario);

function obterDadosFormulario() {
   
    const nomeInput = document.querySelector('#nome');
    const senhaInput = document.querySelector('#senha');
  
    const nome = nomeInput.value;
    const senha = senhaInput.value;
  
    validaçãoUsuario(nome, senha)
    console.log('Nome:', nome);
    console.log('Senha:', senha);
  }
  
  function validaçãoUsuario (nome, senha) {
    if (nome === 'Genki' && senha === 'semcasa') {
            redirecionarParaLink('Genki')    

    } else{
        redirecionarParaLink('none')
    }
  
}

  function redirecionarParaLink(validacao) {
    const GenkiUrl = 'https://blackvsm.github.io/Eternos/paginas/jogadores/biel.html';
    
    const ErroUrl = './paginas/doc/erro.html'
    
    if (validacao === 'Genki'){
        window.location.href = GenkiUrl;
    } else {
        window.location.href = ErroUrl;
    }
    
  }
 

