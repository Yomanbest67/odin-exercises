export default function caesarCipher(text, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let wordArray = text.split("");

    for (let i = 0; i < wordArray.length; i++) {
        
        if (alphabet.indexOf(wordArray[i].toLowerCase()) != -1) {

            let alphaLetterIndex = alphabet.indexOf(wordArray[i].toLowerCase()) + shift;

            if (alphaLetterIndex >= alphabet.length){
                alphaLetterIndex -= alphabet.length;
            }

            let shiftedLetter = alphabet[alphaLetterIndex];

            if (wordArray[i] == wordArray[i].toUpperCase()) {
                wordArray[i] = shiftedLetter.toUpperCase();
            }
            else {
                wordArray[i] = shiftedLetter;
            }
        } 

    }

    wordArray = wordArray.join("");

    return wordArray;
}