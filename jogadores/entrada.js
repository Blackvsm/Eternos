document.addEventListener('DOMContentLoaded', function() {
    var gifElement = document.getElementById('loading-animation');
    var conteudoElement = document.querySelector('.perfil');

    
    window.addEventListener('load', function() {
      
      setTimeout(function() {
        gifElement.style.display = 'none';
  
        
        conteudoElement.style.display = 'flex';
      }, 1200); 
    });
  });
  