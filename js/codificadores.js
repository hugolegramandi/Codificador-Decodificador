export default function codificadores() {
    // Peguei o botão
    let btn = document.querySelector('.btn')
    // Peguei a área da msg
    let texto = document.getElementById('mensagem')
    // Peguei o campo de resultado
    let resultField = document.querySelector('.resultado')
    // Peguei input Cifra
    let inputCifra = document.getElementById('cifra')
    // Peguei input Base64
    let inputCodificar = document.getElementById('codificar')

    // Crio evento de click no botão, que vai executar a função
    btn.addEventListener('click', function(event){
        event.preventDefault();
        if (inputCifra.checked) {
            cifraCesar()
        } else {
            decBase64()
        }
        
    })

    // Lógica da codificação
    const cifraCesar = () => {
        const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        // Peguei o texto do campo de mensagem
        let frase = texto.value;
        // Converti o texto para minusculo
        frase = frase.toLowerCase();
        const inc = document.getElementById('incremento') //PEGA O INCREMENTO
        const x = parseInt(inc.value); //X VAI SER O VALOR QUE FOI DIGITADO NO INPUT
        let fraseCodificada = [];

        for (let i = 0; i < frase.length; i++){ //FOR QUE CORRE PELA FRASE DIGITADA
            if(frase[i] != ' ' ){     // CASO A POSIÇÃO NA FRASE SEJA DIFERENTE DE VAZIO
                for (let j = 0; j < alfa.length; j++ ){ //FOR QUE CORRE PELA ARRAY DO ALFABETO
                    if ( frase[i] == alfa[j] ){ // ELE CORRE O ALFABETO ATÉ ENCONTRAR A LETRA (alfa[j]) QUE SEJA IGUAL (frase[i])
                        if(btn.textContent === 'Codificar'){
                            fraseCodificada[i] = alfa[(j + x)]; //PEGA A POSIÇÃO DA LETRA, E ADICIONA X ( VALOR DE CASAS ) E RETORNA  A NOVA LETRA
                        }
                        else if(btn.textContent === 'Decodificar'){
                            fraseCodificada[i] = alfa[(j - x)]; //PEGA A POSIÇÃO DA LETRA, E ADICIONA X ( VALOR DE CASAS ) E RETORNA  A NOVA LETRA        
                        }
                    }
                }
            }
            else{
                fraseCodificada[i] = ' ';
            }
    }
    resultField.innerText = fraseCodificada.join('')
    }
    const decBase64 = () => {
        // Peguei o texto do campo de mensagem e converti o texto para minusculo
        let frase = texto.value;
        if (inputCodificar.checked) {
            let fraseCod = btoa(frase)
            resultField.innerText = fraseCod
        } else {
            let fraseDecod = atob(frase)
            resultField.innerText = fraseDecod
        }

    }
 
}

