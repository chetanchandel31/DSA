/*
- if q and q are greater than curr, check right side
- if q and q are lesser than curr, check right side
- else split has happened, curr is LCA (lowest common ancestor)
*/

import { TreeNode } from "./invertBinaryTree";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let curr = root;

  if (p === null || q === null) return null;

  while (curr) {
    if (q.val > curr.val && p.val > curr.val) {
      curr = curr.right;
    } else if (q.val < curr.val && p.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }

  return null; // just so TS doesn't complain
}
