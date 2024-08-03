/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
// [1,2,3,4,5]
function reorderList(head: ListNode | null): void {
  // find middle
  let slow = head;
  let fast = head?.next;

  while (fast && fast.next) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }

  // separate 2 halves, reverse second half
  let second = slow?.next;
  if (slow) slow.next = null;

  let prev: ListNode | null = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // merge both halves
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf) {
    let temp = firstHalf?.next || null;
    let temp2 = secondHalf.next;

    if (firstHalf) firstHalf.next = secondHalf;
    secondHalf.next = temp;

    firstHalf = temp;
    secondHalf = temp2;
  }
}
