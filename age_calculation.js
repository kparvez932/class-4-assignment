function info(name, Years){
    return`Hi ${name}, You are ${ 2022 - Years} Years Old`

}

let name = prompt('Type Your Name');
let Years  = Number(prompt('Type Your Birth Year'))

console.log(info(name, Years));