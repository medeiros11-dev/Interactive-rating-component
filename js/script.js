const botaoEnviar = document.querySelector('.botao-enviar');
const conteudoCartao1 = document.querySelector('.conteudo-cartao-1');
const conteudoCartao2 = document.querySelector('.conteudo-cartao-2');
const botoesVoto = document.querySelectorAll('.botao-voto');
const nota = document.querySelector('.nota');
let valorNota = 3;


botaoEnviar.addEventListener('click', onSubmit);
botoesVoto.forEach(botao => {
    botao.addEventListener('click', marcarBotaoDeVotoClick)
});

function onSubmit(){
    conteudoCartao1.classList.add('hide');
    nota.textContent = valorNota;
    conteudoCartao2.classList.remove('hide');
  
    //console.log('submit click nigga')
}

function marcarBotaoDeVotoClick(event){
    botoesVoto.forEach(botao => {
        botao.classList.remove('active')
    });

    if (event.target.classList.contains('botao-voto')){
        event.target.classList.add('active');
    }
    else {
        event.target.parentElement.classList.add('active');
    }
    //caixa de voto
    valorNota = event.target.textContent;
    console.log(valorNota)

}

console.log(botoesVoto);