
// Função que irá carregar todo o DOM (Documento) e depois o Js
document.addEventListener("DOMContentLoaded", function() {

      
  function rolarParaDestino(destino){
    let elementoDestino = document.getElementById(destino);  
    if(destino){
      destino.scrollIntoView({behavior: "smooth"});   
    }   
  }
});
  