const passwordInput = document.querySelector("#passwordInput");

//"escuta" cada vez que o usuário digitar
passwordInput.addEventListener("input", function(){
  const password = this.value;
  const strengthIndicator = document.querySelector("#password-strength-indicator");
  const strengthText = document.querySelector("#password-strength-text");

  //elencando as forças
  const strengths = {
    0: "Muito fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito forte"
  };

  let score = 0;

  //Requisitos
  if(password.length >= 8) score++;

  //match(expressão regular) - usando pra verificar se há letras no campo
  if(password.match(/[a-z]/)) score++;
  if(password.match(/[A-Z]/)) score++;

  //Se houver um caractere que não está entre a e z, entre A e Z e entre 0 e 9...
  if(password.match(/[^a-zA-z0-9^]/)) score++;

  //calculo da % 
  const width = (score/4)*100;
  strengthIndicator.style.width = `${width}%`;

  if(password.length > 0){
    strengthText.innerHTML = `Força: ${strengths[score]}`;
  } 
  else{
    strengthText.innerHTML = ""
  }  

  //Cores da barra verificadora
  switch(score){
    case 1:
      return strengthIndicator.style.backgroundColor = "#FF3434";
      break;
    case 2:
      return strengthIndicator.style.backgroundColor = "#E3A311";
      break;
    case 3:
      return strengthIndicator.style.backgroundColor = "#CDFF00";
      break;
    case 4:
      return strengthIndicator.style.backgroundColor = "#70FF00";
      break;
    default:
      return strengthIndicator.style.backgroundColor = "transparent";
      break;
  }
});

//modo dark - modo light
const checkbox = document.querySelector("#checkbox");

//escuta de click
checkbox.addEventListener('change',()=>{
  //setando a classList do body
  document.body.classList.toggle('dark');
});

