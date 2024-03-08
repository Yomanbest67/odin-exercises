// I could not solve this exercise initially, but took the time to 
// study a solution in great depth, then recreate it logically.

function mergeSort (array) {

    // Once the array has less than 2 elements, it is sorted.

    if (array.length < 2) {
        return array;
    }

    // Keep separating the array into left and right then
    // send the left and right to merge.
    
    let leftSide = mergeSort(array.slice(0, Math.floor(array.length / 2)));
    let rightSide = mergeSort(array.slice(Math.floor(array.length / 2), array.length))

    return merge(leftSide, rightSide)
}


function merge (leftSide, rightSide) {

    // mergeArray will take the numbers once compared.
    // L and R represent index counters for leftSide and
    // rightSide respectively. 

    let mergeArray = [];
    let L = 0;
    let R = 0;

    // As long as the leftSide or rightSide don't reach their
    // maximum index (L or R), keep comparing elements.
    // Once an element is found to be lower, append it to mergeArray
    // and increase that side's index counter.
    // The next element compared will be at that specific index.

    while(leftSide.length !== L && rightSide.length !== R){
        if (leftSide[L] < rightSide[R]) {
            mergeArray.push(leftSide[L]);
            L++;
        } else {
            mergeArray.push(rightSide[R]);
            R++;
        }
    }

    // The arrays will have their elements appended once compared, 
    // but one of the arrays might be left with an extra element.
    // If so, append that extra element at the end of mergeArray.
    // That extra element will always be bigger.

    if (rightSide.length == R) {
        mergeArray = mergeArray.concat(leftSide.slice(L));
    } else {
        mergeArray = mergeArray.concat(rightSide.slice(R));
    }

    return mergeArray;
}



console.log(mergeSort([5, 6, 9, 2, 1, 7, 3]));