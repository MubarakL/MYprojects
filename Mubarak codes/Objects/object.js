let Bag ={
    type : "Duslang",
    year : 2018,
    color : "red",
    components : ['four zips', 'two side net pockets', 'one overhead handle', 'two backhandles for easy carriage'],
    size : 5 +""+"ft",
    OpenBag : () => {
        return 'Duslang'+" "+2018
    }
}
console.log(Bag)


// let Bag ={
//     type : "Duslang",
//     year : 2018,
//     color : "red",
//     components : ['four zips', 'two side net pockets', 'one overhead handle', 'two backhandles for easy carriage'],
//     OpenBag : function (){
//         return this.color
//     }
// }
// console.log(Bag.OpenBag())

const surpriseprompt = () => {
  let usersName = prompt("what is your name")

  document.getElementById('username').innerHTML= usersName
  document.getElementById('une').innerHTML= new Date()

}
let myname= "We hate the so called \"vikings\" alot"
console.log(myname)

