
import {PassGenerator,nameGenerator, otherTools} from './swissGenerator.js';

const generator = new PassGenerator();
const nick= new nameGenerator();
const tools=new otherTools();


console.log(generator.password); 
//*[]complete the generator class with all the methods and properties
generator.onlyCharacter("ABC123");
console.log(generator.password); 

generator.generateRange(8, 12);
console.log(generator.password);

generator.generateCombination("alaju", "akbar");
console.log(generator.password); 

generator.generateExact(10)
console.log(generator.password);

//*[]complete the generator class with all the methods and properties
nick.nickNameG(3,4)
console.log(nick.name)

nick.NickNameCombination("alaju", "akbar")
console.log(nick.name)

//*[]complete the generator class with all the methods and properties



