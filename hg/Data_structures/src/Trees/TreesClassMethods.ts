export interface INode<T> {
    value: T;
    left: INode<T> | null;
    right: INode<T> | null;
}

export class Node<T> implements INode<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T, left: INode<T> | null = null, right: INode<T> | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class BinaryTree<T> {
    root: INode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(value: T) {
        const newNode: INode<T> = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: INode<T>, newNode: INode<T>) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(): T[] {
        return this.inOrder(this.root, []);
    }

    private inOrder(node: INode<T> | null, result: T[]): T[] {
        if (!node) return result;
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
        return result;
    }

    preOrderTraversal(): T[] {
        return this.preOrder(this.root, []);
    }

    private preOrder(node: INode<T> | null, result: T[]): T[] {
        if (!node) return result;
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }

    postOrderTraversal(): T[] {
        return this.postOrder(this.root, []);
    }

    private postOrder(node: INode<T> | null, result: T[]): T[] {
        if (!node) return result;
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
        return result;
    }

    countNodes(): number {
        return this.count(this.root);
    }

    private count(node: INode<T> | null): number {
        if (!node) return 0;
        return 1 + this.count(node.left) + this.count(node.right);
    }

    findMinValue(): T | null {
        return this.findMin(this.root);
    }

    private findMin(node: INode<T> | null): T | null {
        if (!node) return null;
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    findMaxValue(): T | null {
        return this.findMax(this.root);
    }

    private findMax(node: INode<T> | null): T | null {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
}
