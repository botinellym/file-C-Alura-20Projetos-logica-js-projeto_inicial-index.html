alert ('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 3000;
let numeroSecreto =  parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto) {
      chute =prompt (`Escolha um número de 1 a ${numeroMaximo}`);
      if (chute == numeroSecreto) {
         // While PARA nao continua  
         break; 
      }     else {
            if (chute > numeroSecreto) {
                  alert(`O número secreto é menor que ${chute}`);
            }     else {
                  alert (`O número secreto é maior que ${chute}`);
            }
            // tentativas = tentativas + 1;
            tentativas++; 
      }
}
let palavraTentativa = tentativas > 1 ? 'tentativas ' : 'tentativa';
     alert(`Isso ai! Você acertou exatamente o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// if (tentativas > 1) {
      //alert(`Isso ai! Você acertou exatamente o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
      //}    // else{
     // alert(`Isso ai! Você acertou exatamente o número secreto ${numeroSecreto} com ${tentativas} tentativa};
     //}





