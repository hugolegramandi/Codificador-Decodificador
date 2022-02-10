export default function mudarMsgBtn() {
  // Aqui vou mudar a frase no botão de acordo com a escolha
  // Primeira coisa, vou selecionar meu botão
  let btn = document.querySelector('.btn')

  // Vou mudar o texto ao selecionar a opção de cod/decod. Então, preciso adicionar um evento diferente para cada opção
  // Primeiro, seleciono as opções
  let labelCod = document.getElementById('cod')
  let labelDec = document.getElementById('decod')

  // Depois, crio as funções
  function mudarCod() {
    btn.textContent = 'Codificar'
  }

    function mudarDec() {
    btn.textContent = 'Decodificar'
  }

  // Depois, adiciono o event listener para ativar a função correspondente
  labelCod.addEventListener('click', function() {
    mudarCod();
  });

  labelDec.addEventListener('click', function() {
    mudarDec();
  })
}