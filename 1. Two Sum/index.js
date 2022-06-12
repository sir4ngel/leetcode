/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = (nums, target) => {
    let res;
    let i = 0;
    let j = i + 1;
    for (; i < nums.length; j++) {
        if (j === nums.length) {
            i++;
            j = i + 1;
        }
        if ((nums[i] + nums[j]) === target) {
            res = [i, j];
            break;
        };
    }
        return res;
};