
import {PassGenerator,nameGenerator} from './swissGenerator.js';

const generator = new PassGenerator();
const nick= new nameGenerator();
console.log(generator.password); 

generator.onlyCharacter("ABC123");
console.log(generator.password); 

generator.generateRange(8, 12);
console.log(generator.password);

generator.generateCombination("alaju", "akbar");
console.log(generator.password); 


generator.generateExact(10)
console.log(generator.password);

nick.nickNameG(3,10)
console.log(nick.name)


