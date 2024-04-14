// add whatever parameters you deem necessary

function freqCounter(str) {
    let countermap = new Map()
    //loop through the string
    for (let val of str) {
        // check if map already has value
        let valCount = countermap.get(val) || 0
        //set value or change it
        countermap.set(val, valCount + 1)
    }
    return countermap;
}

function sameFrequency(num1, num2) {
    //do they have the same frequency of digits
    //let's reuse freqCounter and compare keys and values
    let one = num1.toString();
    let two = num2.toString();
    if (one.length !== two.length) return false;

    let mapStr1 = freqCounter(one);
    let mapStr2 = freqCounter(two);

    if (mapStr2.size < mapStr1.size) return false;

    for (let digit of mapStr1.keys()) {
        if (!mapStr2.has(digit)) return false;
        if (mapStr2.get(digit) !== mapStr1.get(digit)) return false;
    }
    return true;

}

module.exports = { freqCounter, sameFrequency }
