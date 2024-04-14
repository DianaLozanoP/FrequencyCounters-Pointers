// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    //first array: keys
    //second array: values
    //pair keys and values
    //okay to have keys with null
    //length should be equal to keys
    let finalMap = {}
    for (let i = 0; i <= arr1.length - 1; i++) {
        if (arr2[i]) {
            finalMap[arr1[i]] = arr2[i]
        }
        else {
            finalMap[arr1[i]] = null;
        }
    }
    return finalMap;
}

module.exports = { twoArrayObject }