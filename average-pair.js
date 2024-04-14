// add whatever parameters you deem necessary
//given sroted array of integerd and a target average
//average of the pair equals the target
function averagePair(arr, target) {
    //create two pointers
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let avg = arr[left] + arr[right] / 2;
        if (avg < target) {
            left++;
        }
        else if (avg > target) {
            right--;
        }
        else if (avg === target) {
            return true;
        }
    }
    return false;
}

module.exports = { averagePair };
