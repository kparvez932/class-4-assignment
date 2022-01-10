let cureency = (type, amount) => {

    if(type == 'USD' || type == 'Dollar' || type == 'dollar' || type == 'DOLLAR'){
        return`${amount} DOLLAR = ${amount * 80}/- Taka (BDT).` 
    }else if(type == 'CAD' || type == 'cad' || type == 'Cad'){
        return`${amount} CAD = ${amount * 67.64}/- Taka (BDT).` 
    }else if(type == 'POUND' || type == 'Pound' || type == 'pound'){
        return`${amount} POUND = ${amount * 116.2}/- Taka (BDT).` 
    }else if(type == 'EURO' || type == 'Euro' || type == 'euro'){
        return`${amount} EURO = ${amount * 97.15}/- Taka (BDT).` 
    }else{
        return`Please Type Currectly`
    }
}

let type = prompt('Enter Currency Type')
let amount = prompt('Enter amount')


console.log(cureency(type, amount))