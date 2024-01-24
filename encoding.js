const ENCODE_EQUIVALENCY = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

function encode(string) {
    let resultString = '';
    for (char of string) {
        if (Object.hasOwn(ENCODE_EQUIVALENCY, char)) {
            resultString += ENCODE_EQUIVALENCY[char];
        } else {
            resultString += char;
        }
    }

    return resultString;
    
}

function decode(string) {
    let resultString = string;
    for (const [key, value] of Object.entries(ENCODE_EQUIVALENCY)) {
        resultString = resultString.replaceAll(value, key);
    }

    return resultString;
}




