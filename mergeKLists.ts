// TODO: time complexity

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  while (lists.length > 1) {
    let mergedLists: (ListNode | null)[] = [];

    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      let list2 = i + 1 < lists.length ? lists[i + 1] : null;

      const mergedList = mergeLists(list1, list2);

      mergedLists.push(mergedList);
    }

    lists = mergedLists;
  }

  return lists[0] || null;
}

function mergeLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyNode = new ListNode();
  let tail = dummyNode;

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

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummyNode.next;
}
