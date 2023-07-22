export function exactPassword(characters_count){
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < characters_count; i++) {   
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}