/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const list = new ListNode(0);
    let currentNode = list;
    let carry = 0;
    while (l1 != null || l2 != null) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        console.log(`${l1?.val || 0} + ${l2?.val || 0} + ${carry} = ${sum}`)
        carry = 0;
        if (sum > 9) {
            carry = Math.floor(sum / 10)
            sum = sum % 10
        }
        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next
        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next
    }

    if (carry > 0) {
        currentNode.next = new ListNode(carry)
    }
    return list.next;
};