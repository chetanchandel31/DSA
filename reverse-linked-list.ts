//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseListIterative(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const nxt = current.next;
    current.next = prev;

    prev = current;
    current = nxt;
  }

  return prev;
}

function reverseList(head: ListNode | null): ListNode | null {
  const reverseListRecursive = (
    prev: ListNode | null,
    curr: ListNode | null
  ): ListNode | null => {
    if (curr === null) {
      return prev;
    }
    const nxt = curr.next;
    curr.next = prev;

    prev = curr;
    curr = nxt;

    return reverseListRecursive(prev, curr);
  };

  return reverseListRecursive(null, head);
}
