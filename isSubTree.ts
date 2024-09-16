import { TreeNode } from "./invertBinaryTree";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot === null) {
    return true;
  }

  if (root === null) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
