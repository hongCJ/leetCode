/**
 * 
 * @param {number} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
exports.TreeNode = TreeNode;
/**
 * 
 * @param {Array<number>} array 
 * 
 * @returns {TreeNode}
 */
exports.makeTree = function(array) {
    if (array.length == 0) {
        return null;
    }
    let first = array.shift();
    let root = new TreeNode(first, null, null);
    let stack = [root];
    while (array.length > 0) {
        let node = stack.shift();
        let left = array.shift();
        if (left) {
            node.left = new TreeNode(left, null, null);
            stack.push(node.left);
        }
        let right = array.shift();
        if (right) {
            node.right = new TreeNode(right, null, null);
            stack.push(node.right);
        }
    }
    return root;
}