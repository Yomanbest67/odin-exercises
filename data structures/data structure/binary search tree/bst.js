class Node {
    constructor (data, left, right) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }
}

class BinaryTree {
    constructor (array) {
        this.array = this.sortArray(array);
        this.root = this.buildTree(this.array);
    }

    sortArray (array) {
        // Takes the duplicates out and sorts the other numbers in ascending order.
        array = [...new Set(array)].sort((a, b) => a - b);

        return array;
    }

    buildTree (array = this.array, start = 0, end = this.array.length-1) {

        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = new Node(array[mid]);

        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid + 1, end);

        return node;
    }

    prettyPrint (node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
    
    insert (value, node = this.root) {

        if (value < node.data) {
            if (node.left == null) {
                node.left = new Node(value);
            } else {
                return this.insert(value, node.left);
            }
            
        } else if (value > node.data) {
            if (node.right == null) {
                node.right = new Node(value);
            } else {
                return this.insert(value, node.right);
            }
        }

    }
    
    // Helper Function to find Parent Node.
    findParent (root, target) {
        if (!root) return null;

        if (root.data === target) return null;

        let currentParent = root;
        let currentNode = root;

        while (currentNode) {
            if (target < currentNode.data) {
                currentParent = currentNode;
                currentNode = currentNode.left;
            } else if (target > currentNode.data) {
                currentParent = currentNode;
                currentNode = currentNode.right;
            } else {
                return currentParent; // Parent Found.
            }
        }

        return null;
    }

    
    deleteItem(value, root) {
        if (!root) return root; 
        
        // Search for the node
        if (value < root.data) {
            root.left = this.deleteItem(value, root.left);
        } else if (value > root.data) {
            root.right = this.deleteItem(value, root.right);
        } else {
            // Node found, handle deletion based on children
            if (!root.left) {
                return root.right; // One child (right)
            } else if (!root.right) {
                return root.left; // One child (left)
            } else {
                // Two children: Find inorder successor
                let successor = this.findMin(root.right);
                root.data = successor.data;
                // Recursively delete the inorder successor (likely a leaf node)
                root.right = this.deleteItem(successor.data, root.right);
            }
        }
        
        return root;
    }
        
    findMin(node) {
        if (!node.left) return node;
        return this.findMin(node.left);
    }
    

    find (value, root = this.root) {
        if (!root) return null;
        if (root.data === value) return root;
        return this.find(value, root.left) || this.find(value, root.right);
    }

    levelOrder (callback, root = this.root) {

        if (!root) return result;

        const queue = [];
        const result = [];
        queue.push(root);

        while (queue.length > 0) {
            const levelSize = queue.length;
            let currentLevel = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                
                if (callback) {
                    callback(node);
                } else {
                    currentLevel.push(node.data);
                }
                
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(currentLevel)
        }

        return result;
    }

    inOrder (root, callback, array = []) {

        if (root) {    
            this.inOrder(root.left, callback, array);

            if (callback == undefined) {
                array.push(root.data);
            } else {
                callback(root);
            }

            this.inOrder(root.right, callback, array);
        }
        
        return array;
    }

    preOrder (root, callback, array = []) {
        if (root) {
            
            if (callback == undefined) {
                array.push(root.data);
            } else {
                callback(root);
            }
            
            this.preOrder(root.left, callback, array);
            this.preOrder(root.right, callback, array);
        }
        
        return array;
    }

    postOrder (root, callback, array = []) {
        if (root) {    

            this.postOrder(root.left, callback, array);
            this.postOrder(root.right, callback, array);

            if (callback == undefined) {
                array.push(root.data);
            } else {
                callback(root);
            }
            
        }
        
        return array;
    }

    height (node) {
        if (node == null) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    depth (node, root = this.root, result=0) {
        // Using modified find method code.

        if (!root) return null;
        result++;
        if (root.data === node) return result;
        return this.depth(node, root.left, result) || this.depth(node, root.right, result);
    }

    isBalanced (root = this.root) {
        if (root == null) return true;

        let leftH = this.height(root.left);
        let rightH = this.height(root.right);

        if (Math.abs(leftH - rightH) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right)) {
            return true;
        }
        
        return false;
    }

    rebalance () {
        const newArray = this.sortArray(this.preOrder(this.root));
        
        this.array = newArray;
        this.root = this.buildTree();
    }
}

function xor (a, b) {
    return (a && !b) || (!a && b);
}

(function driverScript () {
    let array = []

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random() * 200);
        array.push(randomNumber);
    }

    const tree = new BinaryTree(array);
    
    console.log(tree.isBalanced());
    
    console.log(tree.preOrder(tree.root));
    console.log(tree.postOrder(tree.root));
    console.log(tree.inOrder(tree.root));

    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * 400);
        tree.insert(randomNumber);
    }

    console.log(tree.isBalanced());

    tree.rebalance();

    console.log(tree.isBalanced());

    console.log(tree.preOrder(tree.root));
    console.log(tree.postOrder(tree.root));
    console.log(tree.inOrder(tree.root));
})();