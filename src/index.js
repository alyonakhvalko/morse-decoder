const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let sign=""; 
    let result ="";
    for(i=expr.length-1;i>0;i-=2){
       if (expr[i-1]=="1" && expr[i]=="0") 
        {sign+=".";} 

       if (expr[i-1]=="1" && expr[i]=="1") 
        {sign+="-";}   

       if (((i-1)%10==false)) {  
       if (expr[i]=="*")
        { result+=" " }      
            else {
        sign=sign.split("").reverse().join("");
        result+=MORSE_TABLE[sign]; 
        sign="";
        }}}
    result=result.split("").reverse().join("");
    return result;
}

module.exports = {
    decode
}