export function onlyCharacter(password, characters) {
    return password + getRandomCharacter(characters);
  }
  
  function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }
  