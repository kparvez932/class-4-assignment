let ageCale = (name, age) => {

    if(age >= 0 && age <= 11){
        return`Hi ${name} You Are ${age} Years Old And You Are A Babu`;
    }else if(age >= 12 && age <= 18){
        return`Hi ${name} You Are ${age} Years Old And You Are A Kisor`;
    }else if(age >= 19 && age <= 35){
        return`Hi ${name} You Are ${age} Years Old And You Are A Jubok`;
    }else if(age >= 36 && age <= 55){
        return`Hi ${name} You Are ${age} Years Old And You Are A Moddho Boyosko`;
    }else if(age >= 56 && age <= 70){
        return`Hi ${name} You Are ${age} Years Old And You Are A Briddho`;
    }else if(age >= 71 && age <= 100){
        return`Hi ${name} You Are ${age} Years Old And You Are A Khun Khuna Briddho`;
    }else{
        return`Hi ${name} You Are ${age} Years Old And You Are A Jin`;
    }
      
}

let naam = prompt('Please Enter Your Name');
let boyos = prompt('Please Enter Your Age');

console.log(ageCale(naam, boyos))