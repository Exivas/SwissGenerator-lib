// passGenerator.js
import { addCharacters } from './add.js';
import { rangePass } from './rangePass.js';
import { passCombination } from './passCombination.js';
import { exactPassword } from './exactPassword.js';
class PassGenerator {
  constructor() {
    this.password = '';
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return this._password;
  }

  addCharacters(characters) {
    this.password = addCharacters(this.password, characters);
  }

  generateRange(min, max) {
    this.password = rangePass(min, max);
  }

  generateCombination(value1, value2) {
    this.password = passCombination(value1, value2);
  }
  generateExact(count_Characters) {
    this.password = exactPassword(count_Characters);
  }
}

export default PassGenerator;
