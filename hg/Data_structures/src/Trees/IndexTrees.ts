import { BinaryTree } from "./TreesClassMethods";

const tree = new BinaryTree<number>();

tree.insert(5);
tree.insert(30);
tree.insert(75);
tree.insert(22);
tree.insert(45);
tree.insert(10);
tree.insert(80);

console.log("In-order traversal:");
console.log(tree.inOrderTraversal());

console.log("Pre-order traversal:");
console.log(tree.preOrderTraversal());

console.log("Post-order traversal:");
console.log(tree.postOrderTraversal());

console.log("Number of nodes in the tree:");
console.log(tree.countNodes());

console.log("Minimum value in the tree:");
console.log(tree.findMinValue());

console.log("Maximum value in the tree:");
console.log(tree.findMaxValue());
