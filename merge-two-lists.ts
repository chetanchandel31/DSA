function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // initialize result list w dummy node
  const dummy = new ListNode(undefined);
  let tail = dummy;

  // go over both lists and add smallest to result
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      tail.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    tail = tail.next;
  }

  // add remaining list to tail
  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}
