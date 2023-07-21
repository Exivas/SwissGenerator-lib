
export function passCombination(value1, value2) {
    const characters = value1 + value2;
    let password = '';
    let length = Math.floor(Math.random() * characters.length) + 1;
    for (let i = 0; i < length; i++) {
      password += getRandomCharacter(characters);
    }
    return password;
  }
  
  function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }
  