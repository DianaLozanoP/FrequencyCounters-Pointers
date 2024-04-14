// add whatever parameters you deem necessary
function separatePositive(arr) {
    //array of non zero integers
    //positive integers to the left
    //negative integers to the right
    //create two pointers
    let left = 0
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++;
            right--;
        }
        else {
            if (arr[left] >= 0) left++;
            if (arr[right] <= 0) right--;
        }

    }
    return arr;
}

module.exports = { separatePositive }