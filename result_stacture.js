
let name = prompt('Student name');
let roll = prompt('Roll')

let bn = Number(prompt('Bangla'));
let en = Number(prompt('English'));
let math = Number(prompt('Math'));
let s = Number(prompt('Science'));
let ss = Number(prompt('Social Science'));
let rel = Number(prompt('Religion'));


console.log(`

    Student Name    : ${name};
    Roll            : ${roll};

    Subject         Marks           GPA                    Gread
    -------         ------          ------               ---------

    Bangla          ${bn}               ${gpa(bn)}                      ${gread(bn)}        
    English         ${en}               ${gpa(en)}                      ${gread(en)}
    Math            ${math}               ${gpa(math)}                      ${gread(math)}
    Science         ${s}               ${gpa(s)}                      ${gread(s)}
    Social          ${ss}               ${gpa(ss)}                      ${gread(ss)}
    Religion        ${rel}               ${gpa(rel)}                      ${gread(rel)}
----------------------------------------------------------------------
                                    ${cgpa(gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))} 

`);