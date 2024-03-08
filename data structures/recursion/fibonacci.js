function fibsIter(n) {
    if (n < 2) return 'error!';

    let fibsArray = [0, 1];

    for(let i = 2; i < n; i++){
        fibsArray.push(fibsArray[i-1]+fibsArray[i-2]);
    }

    return fibsArray;
}

function fibsRec(n, current = [0, 1]) {

    if (current.length == n) {
        return current;
    }

    current.push( current[current.length-1] + current[current.length-2] );

    return fibsRec(n, current);

}

console.log(fibsRec(10));