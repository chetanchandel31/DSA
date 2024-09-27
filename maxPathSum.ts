import { TreeNode } from "./invertBinaryTree";

/*
- you are going from bottom most nodes to top
- think about function that will update `res` and return largest sum WITHOUT splitting

*/

function maxPathSum(root: TreeNode | null): number {
  let res = root?.val || 0;

  function maxPath(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    const maxLeft = Math.max(0, maxPath(root.left));
    const maxRight = Math.max(0, maxPath(root.right));

    res = Math.max(res, root.val + maxLeft + maxRight);

    return root.val + Math.max(maxLeft, maxRight);
  }

  maxPath(root);

  return res;
}
