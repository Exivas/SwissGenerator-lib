
import { oneOnlyCharacter} from './PassGenerator/oneOnlyCharacter.js';
import { rangePass } from './PassGenerator/rangePass.js';
import { passCombination } from './PassGenerator/passCombination.js';
import { exactPassword } from './PassGenerator/exactPassword.js';
export class PassGenerator {
  constructor() {
    this.password = "";
  }

  set password(value) {
    this._password = value;
  }

  get password() {
    return this._password;
  }

  oneOnlyCharacter(characters) {
    this.password = oneOnlyCharacter(this.password, characters);
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


