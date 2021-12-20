function noconvert() {    
    inputValue = document.getElementById("input-nc").value
    console.log("Value of input field: ", inputValue)    
    document.getElementById("output-nc").value = inputValue
}


function snscEncryptCharacter(c) {
    switch(c) {
        case 'a': return '1';
        case 'b': return '2';
        case 'c': return '3';
        case 'd': return '4';
        case 'e': return '5';
        case 'f': return '6';
        case 'g': return '7';
        case 'h': return '8';
        case 'i': return '9';
        case 'j': return '10';
        case 'k': return '11';
        case 'l': return '12';
        case 'm': return '13';
        case 'n': return '14';
        case 'o': return '15';
        case 'p': return '16';
        case 'q': return '17';
        case 'r': return '18';
        case 's': return '19';
        case 't': return '20';
        case 'u': return '21';
        case 'v': return '22';
        case 'w': return '23';
        case 'x': return '24';
        case 'y': return '25';
        case 'z': return '26';
        case ' ': return ' ';
        case '.': return '.';
        default: return '-1';
    }
}

function snscEncrypt() {    
    inputValue = document.getElementById("input-snsc").value
    outputValue = snscEncryptHelper(inputValue)
    document.getElementById("output-snsc").value = outputValue
}

function snscEncryptHelper(inputValue) {
    inputValue = inputValue.toLowerCase()
    console.log("Value of input field: ", inputValue)

    outputValue = ""

    for (let c of inputValue) {
        outputC = snscEncryptCharacter(c)
        console.log("Processing character: ", c, outputC)
        outputValue += outputC + " "
    }
    return outputValue.trim()
}

function snscDecryptCharacter(c) {
    switch(c) {
        case '1': return 'a';
        case '2': return 'b';
        case '3': return 'c';
        case '4': return 'd';
        case '5': return 'e';
        case '6': return 'f';
        case '7': return 'g';
        case '8': return 'h';
        case '9': return 'i';
        case '10': return 'j';
        case '11': return 'k';
        case '12': return 'l';
        case '13': return 'm';
        case '14': return 'n';
        case '15': return 'o';
        case '16': return 'p';
        case '17': return 'q';
        case '18': return 'r';
        case '19': return 's';
        case '20': return 't';
        case '21': return 'u';
        case '22': return 'v';
        case '23': return 'w';
        case '24': return 'x';
        case '25': return 'y';
        case '26': return 'z';
        case ' ': return ' ';
        case '.': return '.';
        default: return '?';
    }
}

function snscDecrypt() {    
    inputValue = document.getElementById("input-snsc-d").value
    inputValueList = inputValue.split(" ");
    console.log("Value of input field: ", inputValueList)

    outputValue = ""

    for (let c of inputValueList) {
        outputC = snscDecryptCharacter(c)
        console.log("Processing number: ", c, outputC)
        outputValue += outputC
    }

    document.getElementById("output-snsc-d").value = outputValue
}