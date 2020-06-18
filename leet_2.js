const {TreeNode, makeTree} = require("./basic");
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let result = {};
  let stack = [];
  let node = root;
  while (true) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length == 0) {
      break;
    }
    node = stack.pop();
    if (result[node.val]) {
      return true;
    }
    let r = k - node.val;
    result[r] = true;

    node = node.right;
  }
  return false;
};

// let root = makeTree([5,3,6,2,4,null,7]);
// let root = Basic.makeTree([0,-1,2,-3,null,null,4]);

// let a = findTarget(root,-4);
// console.log(a)


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length == 0) {
      return null;
    }
    let v = nums[0];
    let root = new TreeNode(v, null, null);
    for (let j = 1; j < nums.length; j++) {
      let element = nums[j];
      if (element > root.val) {
        let node = new TreeNode(element, root, null);
        root = node;
        continue;
      }
      let temp = root;
      while (temp) {
        if (temp.right == null) {
          temp.right = new TreeNode(element, null, null);
          break;
        }
        if (temp.right.val > element) {
          temp = temp.right;
        } else {
          let node = new TreeNode(element, temp.right, null);
          temp.right = node;
          break;
        }
      }
    }
    return root;
};

let r = constructMaximumBinaryTree([3,2,1,6,0,5])

function printNode(node) {
  if (!node) {
    return;
  }
  printNode(node.left);
  console.log(node.val);
  printNode(node.right);
}
printNode(r);

