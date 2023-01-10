let stringpractice = document.getElementById('stringpractice').innerHTML
console.log(stringpractice)
var mns = stringpractice.indexOf("dolor");
console.log(mns)

let searchoutput = stringpractice.includes('fight')
console.log(searchoutput)
let changetolower = stringpractice.toUpperCase('stringpractice')
console.log(changetolower)
let cutoff = stringpractice.substr(1,15) +  '>>>'
console.log(cutoff)
let replacements = document.getElementById('replacements').innerHTML
let replacement = replacements.replace('Microsoft','W3Schools')
console.log(replacement)
document.getElementById('replacements').innerHTML = replacement


let myuser = document.getElementById('username').innerHTML
var my = myuser.split("_")
document.getElementById("username").innerHTML=my[1]
console.log(my[0])

let y = 23
let not = 43
let notanumber = NaN
var Result = not+y

console.log(Result)
