export function NickNameCombination(name1, name2) {

    let long = name1.toLowerCase() + name2.toLowerCase();
    let nickname = "";
    let vowels = ""; 
    let consonants = ""; 

    for (let i = 0; i < long.length; i++) {
      let letter = long.charAt(i); 
  
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowels += letter;
      } else {
        consonants += letter;
      }
    }
    long=long.length
    long=long/2
    for(let i=0;i<long;i++){
      nickname+=vowels[Math.floor(Math.random()*vowels.length)]
      nickname+=consonants[Math.floor(Math.random()*consonants.length)]
    }
    return nickname;
  }
  