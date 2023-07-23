export function nickNameG(min,max){
    const vowels="aeiou"
    const consonants="bcdfghjklmnpqrstvwxyz"
    let nickName=""
    let length=Math.floor(Math.random()*(max-min+1)+min)
    for(let i=0;i<length;i++){
        if(i%2==0){
            nickName+=consonants[Math.floor(Math.random()*consonants.length)]
        }
        else{
            nickName+=vowels[Math.floor(Math.random()*vowels.length)]
        }
    
    }
    return nickName;
    

}