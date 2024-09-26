import { TreeNode } from "./invertBinaryTree";

/*
- first el of pre-order is always root
- look for root in in-order, thats mid
- remove root from pre-order, divide in 2 parts using mid [(3),9,|20,15,7]
- divide in-order in 2 parts around mid [9,(3),15,20,7]
*/

function buildTree(preOrder: number[], inOrder: number[]): TreeNode | null {
  if (!preOrder.length || !inOrder.length) {
    return null;
  }

  const root = new TreeNode(preOrder[0]);
  const mid = inOrder.indexOf(preOrder[0]);

  root.left = buildTree(preOrder.slice(1, mid + 1), inOrder.slice(0, mid));
  root.right = buildTree(preOrder.slice(mid + 1), inOrder.slice(mid));

  return root;
}
