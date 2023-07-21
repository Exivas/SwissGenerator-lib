// rangePass.js
export function rangePass(min, max) {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDFGHIJQLMNOPQRSTUVWXYZ";
    let password = '';
    let length = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < length; i++) {
      password += getRandomCharacter(characters);
    }
    return password;
  }
  
  function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }
  