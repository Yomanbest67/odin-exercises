export default function reverseString(string) {
    let stringArray = string.split("");

    stringArray = stringArray.reverse().join("");
    
    return stringArray;
}
