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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(undefined);
  dummy.next = head;

  let firstP = dummy;
  let secondP = head;

  for (let i = 0; i < n; i++) {
    secondP = secondP?.next || null;
  }
  while (firstP.next && secondP !== null) {
    firstP = firstP.next;
    secondP = secondP.next;
  }

  const temp = firstP.next;
  firstP.next = firstP.next?.next || null;
  if (temp) temp.next = null;

  return dummy.next;
}
