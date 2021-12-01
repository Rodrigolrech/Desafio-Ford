const VIN = '1';
const CONVERT_PAIR = 2;
const CONVERT_ODD = 6;


// Função para transformar caracteres do VIN em ASC
const turnVinInASC = (vin) => {
  const vinArray = vin.split('');
  const vinInASC = [];
  for(let i = 0; i < vinArray.length; i++) {
    vinInASC.push(vin[i].charCodeAt());
  }
  return vinInASC;
}
 // função para converter numeros
const convertNumber = (number) => {
  let numberToChange = parseInt(number)
  let cripto;
  // caso seja par terá uma chave de conversão diferente
  if (numberToChange % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  // 57 é o ASC char para o numero 9, caso passe disso será necessário voltar ao 0 que é 48
  if (numberToChange + cripto <= 57 ) {
    return numberToChange + cripto;
  } else {
    const value = numberToChange + cripto - 57;
    return 47 + value;
  }
};
 // função para converter caracteres maiusculos
const convertCapsChar = (char) => {
  let charToChange = parseInt(char);
  let cripto;
  if (charToChange % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  if (charToChange + cripto <= 90) {
    return charToChange + cripto;
  } else {
    const value = charToChange + cripto - 90;
    return 64 + value;
  }
};
 // função para converter caracteres minusculos
const convertLowerChar = (char) => {
  let charToChange = parseInt(char);
  let cripto;
  if (char % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  if (charToChange + cripto <= 122) {
    return charToChange + cripto;
  } else {
    const value = charToChange + cripto - 122;
    return 96 + value;
  }
}
// função para retornar os valores ASC para caracteres
const backToChar = (encrypted) => {
  let encryptedArray = [];
  for(let i =0; i < encrypted.length; i++) {
    encryptedArray.push(String.fromCharCode(encrypted[i]))
  }
  return encryptedArray.join('');
}
// função para Criptografar o VIM
const criptoVin = (vin) => {
  vinInASC = turnVinInASC(vin);
  let encrypted = [];
  for (let i = 0; i< vinInASC.length; i++) {
    if (parseInt(vinInASC[i]) <= 57) {
      encrypted.push(convertNumber(vinInASC[i]));
    } else if (parseInt(vinInASC[i]) <= 90) {
      encrypted.push(convertCapsChar(vinInASC[i]));
    } else {
      encrypted.push(convertLowerChar(vinInASC[i]));
    }
  }
  return backToChar(encrypted);
}
const encrypted = criptoVin(VIN);
console.log(criptoVin(VIN));

 // função para reverter numeros
const revertNumber = (number) => {
  let numberToChange = parseInt(number)
  let cripto;
  // caso seja par terá uma chave de conversão diferente
  if (numberToChange % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  if (numberToChange - cripto >= 48 ) {
    console.log(numberToChange - cripto);
    return numberToChange - cripto;
  } else {
    const value = numberToChange - 48;
    return 58 - ( cripto - value);
  }
};

 // função para reverter caracteres maiusculos
const revertCapsChar = (char) => {
  let charToChange = parseInt(char);
  let cripto;
  if (charToChange % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  if (charToChange - cripto >= 65) {
    return charToChange - cripto;
  } else {
    const value = charToChange - 65;
    return 91 - (cripto - value);
  }
};
 // função para reverter caracteres minusculos
const revertLowerChar = (char) => {
  let charToChange = parseInt(char);
  let cripto;
  if (char % 2 === 0) {
    cripto = CONVERT_PAIR;
  } else {
    cripto = CONVERT_ODD;
  }
  if (charToChange - cripto >= 97) {
    return charToChange - cripto;
  } else {
    const value = charToChange - 97;
    return 123 - (cripto - value);
  }
}

 // função para reverter vim encriptografado
const decripted = (vinEncrypted) => {
  encryptedInASC = turnVinInASC(vinEncrypted);
  let encrypted = [];
  for (let i = 0; i< vinInASC.length; i++) {
    console.log(vinInASC[i]);
    if (parseInt(vinInASC[i]) <= 57) {
      encrypted.push(revertNumber(vinInASC[i]));
    } else if (parseInt(vinInASC[i]) <= 90) {
      encrypted.push(revertCapsChar(vinInASC[i]));
    } else {
      encrypted.push(revertLowerChar(vinInASC[i]));
    }
  }
  return backToChar(encrypted);
}

console.log(decripted(encrypted))