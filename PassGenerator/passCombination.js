
export function passCombination(value1, value2) {
    const characters = value1 + value2;
    let password = '';
    let length = characters.length/2
    for (let i = 0; i < length; i++) {
        password +=value1[Math.floor(Math.random() * value1.length)];
        password +=value2[Math.floor(Math.random() * value2.length)];
    }
    return password;
  }