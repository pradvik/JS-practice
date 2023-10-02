// console.log(2 > 1)
// console.log(1 < 2)
// console.log(2 == 2)
// console.log(2 >= 1)
// console.log(1 <= 2)
// console.log( 2 != 1)

//---------------------------------

console.log( "2" == 2 )// --> true (js automatically converts string to number so ans is true)
console.log ( 2 == "2" )// --> true  

console.log(null > 0)// --> false
console.log(null == 0)// --> false
console.log(null >= 0)// --> true (in this case comparision converts null to number, treating it as 0 that's why (3) null >= 0 is true and (1) null > 0 is false)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// ########### Strict check ( === ) ###########
// While comparing two values strict check will only give output true if both the variables are of same datatype
console.log("2" === 2)// --> false
console.log(2 === 2)// --> true
