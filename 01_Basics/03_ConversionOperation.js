let score = "69abc"
console.log(typeof score)

let ScoretoNumber = Number(score)
console.log(typeof ScoretoNumber)
console.log(ScoretoNumber)

let bool = true;
console.log(bool)

let BooltoNum = Number(bool)
console.log(BooltoNum)

let bool_2 = false;
console.log(bool_2)

let Bool_2_To_Num = Number(bool_2)
console.log(Bool_2_To_Num)

let NumtoBool = Boolean(Bool_2_To_Num)
console.log(NumtoBool)

NumtoBool = Boolean(BooltoNum)
console.log(NumtoBool)

//String to Number conversion
 // "33" => 33 --> String to Number.
 // "33abc" => NaN --> string with alphabet and Number can be never converted into number.

//Boolean values to Number and Number to boolean values.
 // true => 1
 // fasle => 0 
 // 1 => true
 // 0 => false


//Number to String

let NewScore = 33
let StoN = String(NewScore)
console.log(StoN)
console.log(typeof StoN)