export default function analyzeArray (array) {
    
    function calculateAverage() {
        let average = 0

        for (let i = 0; i < array.length; i++){
            average += array[i];
        }

        return average /= array.length;
    }

    function getMin() {
        return Math.min(...array);
    }

    function getMax() {
        return Math.max(...array);
    }
    

    const object = {
        average: calculateAverage(),
        min: getMin(),
        max: getMax(),
        length: array.length 
    }

    return object;
}