import { TreeNode } from "./invertBinaryTree";

const tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1), null), new TreeNode(4)),
  new TreeNode(6)
);

function kthSmallest(root: TreeNode | null, k: number): number | undefined {
  let curr: TreeNode | null = root;
  const stack: TreeNode[] = [];
  let n = 0;

  while (curr || stack) {
    while (curr) {
      // go as far left as possible without processing
      stack.push(curr);
      curr = curr.left;
      // keep adding to stack
    }
    // pop and process once reached null
    curr = stack.pop() || null;
    n += 1;

    if (n === k) {
      return curr?.val;
    }

    // go right after processing
    curr = curr?.right || null;
  }
}

kthSmallest(tree, 3);
