/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./invertBinaryTree";

const tree = new TreeNode(
  0,
  new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1)), null),
  new TreeNode(
    4,
    new TreeNode(3, null, new TreeNode(6)),
    new TreeNode(-1, null, new TreeNode(8))
  )
);

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function maxDepthBfs(root: TreeNode | null): number {
  const queue: TreeNode[] = [];
  if (root !== null) {
    queue.push(root);
  }
  let level = 0;

  while (queue.length > 0) {
    const qLength = queue.length;
    for (let i = 0; i < qLength; i++) {
      const node = queue.shift();

      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    level++;
  }

  return level;
}

function maxDepthDfs(root: TreeNode | null): number {
  let level = 0;
  const stack: {node: TreeNode, depth: number}[] = [];
  if (root !== null) {
    stack.push({ node: root, depth: 1 })
  }

  while (stack.length) {
    const el = stack.pop();
    if (!el) continue;
    const { depth, node } = el;

    level = Math.max(depth, level);
    if (node?.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }
    if (node?.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return level;
}

console.log(maxDepthBfs(tree));
