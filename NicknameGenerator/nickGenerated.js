const fs = require('fs');
export function savedNickGenerated(url,nick,index){
    try {
        const data = fs.readFileSync(url, 'utf8');
        const json = JSON.parse(data);
        if(nick in json){
            console.log("Nick already exists");
        }else{
            const autoIncrementID=Object.keys(json).length;
            json[nick] = autoIncrementID;
            const jsonString = JSON.stringify(json,null,2);
            fs.writeFileSync(url,jsonString);
            console.log("Nick generated");
        }
        

    }catch (e) {
        console.error('nick generated error:', e.stack);
    
    }

}