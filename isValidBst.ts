import { TreeNode } from "./invertBinaryTree";

/**
 * valid fn
 * - valid if null tree
 * - invalid if out of range
 * - recursive: going left inherit right value, going right inherit left value
 *
 * */

function isValidBST(root: TreeNode | null): boolean {
  return valid(root, -Infinity, Infinity);
}

function valid(node: TreeNode | null, left: number, right: number): boolean {
  if (node === null) {
    return true;
  }

  if (node.val <= left || node.val >= right) {
    return false;
  }

  return valid(node.left, left, node.val) && valid(node.right, node.val, right);
}
