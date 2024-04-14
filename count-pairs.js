// add whatever parameters you deem necessary
function countPairs(arr, numb) {
    //create an empty set
    let seen = new Set();
    //start counting
    let count = 0;
    //loop the array
    for (let digit of arr) {
        let remaining = numb - digit;
        if (seen.has(remaining)) {
            count++;
        }
        seen.add(digit)
    }
    return count;
}

module.exports = { countPairs }