//!password generator imports
import { onlyCharacter} from './PassGenerator/onlyCharacter.js';
import { rangePass } from './PassGenerator/rangePass.js';
import { passCombination } from './PassGenerator/passCombination.js';
import { exactPassword } from './PassGenerator/exactPassword.js';


//!nickname generator imports
import { nickNameG } from './NicknameGenerator/NicknameG.js'; 
import { NickNameCombination } from './NicknameGenerator/nickNameCombination.js';

//!othertools imports



//password generator functions
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

  onlyCharacter(characters) {
    this.password = onlyCharacter(this.password, characters);
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
//nickname generator functions
export class nameGenerator{
  constructor(){
    this.name = "";
  }
  set name(value){
    this._name = value;
  }
  get name(){
    return this._name;
  }
  nickNameG(min,max){
    this.name = nickNameG(min,max);
  }
  NickNameCombination(value1,value2){
    this.name = NickNameCombination(value1,value2);
  }
}
export class otherTools{
  constructor(){
    this.tool = "";
  }
  set tool(value){
    this._tool = value;
  }
  get tool(){
    return this._tool;
  }
}


