const accountId = 144553
let accountEmail = "ezay@gmail.com"
var accountPassword = "987654"
accountCity = "Rawalpindi"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hec@gmail.com"
accountPassword = "87654"
accountCity = "lahore"

console.log(accountId);

/*
prefered not to use var 
because of its issue in blobk scope and functional scope 
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])