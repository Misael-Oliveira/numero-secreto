// Função para gerar um número aleatório entre 1 e 10
let listaNumerosSorteados = [] ;
let limiteDeNumeros= 30
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
  if(listaNumerosSorteados.length== limiteDeNumeros) {
  listaNumerosSorteados=[]
  }
  if(listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } 
 
 
  else{
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}
let tentativas=1 
// Função para exibir texto na tela
function exibirTextoNaTela(tag, texto) {
  let elemento = document.querySelector(tag);
  elemento.innerText = texto;
}
function mensagemInicial () {
exibirTextoNaTela('h1', ' Jogo Número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 30')
}
mensagemInicial()

// Inicializando o número secreto
let numeroSecreto = gerarNumeroAleatorio();

// Função para verificar o chute
function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    let palavraTentativa= tentativas>1? 'tentativas':'tentativa'  
    let mensagemTentivas=`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('h1', 'Acertou!');
      exibirTextoNaTela('p', mensagemTentivas);
      document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if (chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
          exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
  }
}
function limparCampo() {
  chute=document.querySelector('input');
  chute.value=" ";
}
function reiniciarJogo() {
 numeroSecreto=gerarNumeroAleatorio()  ;
  limparCampo();
  tentativas=1;
mensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);

}
