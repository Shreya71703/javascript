const accountId = "123456"
let accountEmail = "shreya@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"


accountEmail = "hshsh@hcom"
accountPassword = "67890"
accountCity = "Mumbai"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
Prefer to use const for non changing values
*/

console.table([accountId, accountEmail, accountPassword, accountCity])    