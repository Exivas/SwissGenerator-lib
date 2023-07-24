export function TokensG(long) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token = "";

    const charactersLength = characters.length;
    for (let i = 0; i < long; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));


 
}
 return token;
}
