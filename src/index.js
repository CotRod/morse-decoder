const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*': ' ',
};

function decode(expr) {
    let letters = [];
    for (let i = 0; i < expr.length; i += 10) {
        let encodedChar = expr.substring(i, i + 10);
        let morseChar = '*';
        if (encodedChar.indexOf('1') !== -1) {
            morseChar = encodedChar.replace(/10/g, '.')
                                    .replace(/11/g, '-')
                                    .replace(/0/g, '');
        }
        letters.push(morseChar);
    }
    return letters.map(character => MORSE_TABLE[character]).reduce((acc, cur) => acc + cur);
}

module.exports = {
    decode
}