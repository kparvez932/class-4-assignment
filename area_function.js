let ageCale = (type, length , width) => {

    if(type == 'rectangle' || type == 'Rectangle'){
        return length * width
    }else if(type == 'square' || type == 'Square'){
        return length * length
    }else if(type == 'triangle' || type == 'Triangle'){
        return .5 * length * width
    }

}

let type = prompt('Enter Area Type')
let length = prompt('Enter Area Lengt')
let width = prompt('Enter Area Width')

console.log(ageCale(type, length, width))