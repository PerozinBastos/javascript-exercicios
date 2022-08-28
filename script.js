function carregar()  {

var mensagem = window.document.querySelector('.msg')     //seleciona div class msg no html, é classe usa o ponto//
var fotografia = window.document.querySelector('imagens')   //seleciona id imagem no html, não precisa do #//
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas`


    if (hora >= 0 && hora <= 12) {
    imagens.src="/manha.png"
    document.body.style.background = 'red'
}  
 else if (hora >= 12 && hora <= 18 ) {
    imagens.src="/tarde.png"
    document.body.style.background = 'white'
}  
 else {
    imagens.src="/noite.png"
    document.body.style.background = 'blue'
}

     }
