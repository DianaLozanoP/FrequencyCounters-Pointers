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

function constructNote(str1, str2) {
    //str1: msg, str2: letters
    //letters should allow to build msg
    //all lowercase, no space or special char
    if (str2.length < str1.length) return false;
    let mapStr1 = freqCounter(str1);
    let mapStr2 = freqCounter(str2);
    //since letters build msg
    if (mapStr2.size < mapStr1.size) return false;

    for (let letter of mapStr1.keys()) {
        if (!mapStr2.has(letter)) return false;
        if (mapStr2.get(letter) < mapStr1.get(letter)) return false;
    }
    return true;
}

module.exports = { freqCounter, constructNote }