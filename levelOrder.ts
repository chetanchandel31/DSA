import { TreeNode } from "./invertBinaryTree";

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  const queue: TreeNode[] = [];
  if (root) {
    queue.push(root);
    result.push([root.val]);
  }

  while (queue.length) {
    const qLength = queue.length;

    const level: number[] = [];
    for (let i = 0; i < qLength; i++) {
      const node = queue.shift();

      if (node?.left) {
        queue.push(node.left);
        level.push(node.left.val);
      }
      if (node?.right) {
        queue.push(node.right);
        level.push(node.right.val);
      }
    }
    if (level.length) result.push(level);
  }

  return result;
}
