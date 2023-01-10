//regular function
function addbutton (p,q) {
    return p+q
}
console.log(addbutton(12,13))

//arrow function

const Bodmas = (w,x,y,z) => {
    return w/x*y-z
}

console.log(Bodmas(12,13,20,45))

const SimpleInterest = (P,R,T) => {
    return (P*R*T)/100
}
console.log(SimpleInterest(5000,5,2))
document.getElementById("simpleinterest").innerHTML=SimpleInterest(5000,5,2)


let usersname = prompt("what is your name");
console.log(usersname)
document.getElementById("usersname").innerHTML=usersname