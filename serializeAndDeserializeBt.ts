import { TreeNode } from "./invertBinaryTree";

/*
pre-order = process all left before going to right
*/

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const res: string[] = [];

  const dfs = (root: TreeNode | null) => {
    if (root === null) {
      res.push("N");
      return;
    }

    res.push(String(root.val));
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return res.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(",");
  let i: number = 0;

  const dfs = (): TreeNode | null => {
    if (values[i] === "N") {
      i++;
      return null;
    }

    const node = new TreeNode(Number(values[i]));
    i++;
    node.left = dfs();
    node.right = dfs();

    return node;
  };

  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
