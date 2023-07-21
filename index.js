
import PassGenerator from './passGenerator.js';

const generator = new PassGenerator();
/*console.log(generator.password); 

generator.addCharacters("ABC123");
console.log(generator.password); 

generator.generateRange(8, 12);
console.log(generator.password);

generator.generateCombination("alaju", "akbar");
console.log(generator.password); */


generator.generateExact(10)
console.log(generator.password);