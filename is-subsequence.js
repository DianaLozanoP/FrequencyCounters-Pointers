// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    //check is str1 is inside two without order changing
    let stack1 = str1.split("")
    let stack2 = str2.split("")
    //loop through stack1 array
    while (stack1.length > 0) {
        //if they match remove the first item for both
        if (stack1[0] === stack2[0]) {
            stack1.shift()
            stack2.shift()
        }
        //if it does not match, remove element of second stack
        //keep checking
        else {
            stack2.shift()
        }
        //no more elements in second stack,s break and return false
        if (stack2.length === 0 && stack1.length !== 0) return false;
    }
    return true;
}


module.exports = { isSubsequence }