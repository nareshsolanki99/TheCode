// Operator     Precendence    Associativity
// Grouping ()       18          
// **                13          right to left
// */ %              12          left to right
// + -               11          left to right
// > >= < <=         9           left to right
// =                 2           right to lefts
let x =  3 + 4 / 2 *( 4 - 2) ** 2
let y = 3 + 4 / 2 * 2 ** 2
y = 3 + 4 / 2 * 4
y = 3 + 2 * 4
y = 3 + 8
console.log(y)
console.log(x)

let exp = 3 ** 2 ** 3
let exp1 = 3 ** 8
console.log(exp1)
console.log(exp)

let a = 25
let b
let c = b = a
console.log(c)