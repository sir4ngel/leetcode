/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var digits = split(x);
    if (digits[0] < 0) {
        return false;
    }
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== digits.pop()) {
            return false;
        }
    }
    return true;
};

const split = (n) =>
    n < 10 ?
        [n] :
        [...split(Math.floor(n / 10)), n % 10]