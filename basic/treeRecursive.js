class TreeNode {
  constructor(value) {
    this.value = value // The value of the node
    this.firstChild = null // Reference to the first child node (Tree aspect)
    this.nextSibling = null // Reference to the next sibling node (Linked List aspect)
  }
}

// Example of building a tree
const root = new TreeNode('A')
root.firstChild = new TreeNode('B') // First child of root
root.firstChild.nextSibling = new TreeNode('C') // Second child of root (sibling of node 2)
root.firstChild.firstChild = new TreeNode('D') // First child of node 2
root.firstChild.firstChild.nextSibling = new TreeNode('E') // Second child of node 2 (sibling of node 4)

function traverseDFS(node) {
  if (!node) return

  // console.log(node.value); // Process the current node

  // Traverse the first child (if exists)
  traverseDFS(node.firstChild)

  // Traverse the next sibling (if exists)
  traverseDFS(node.nextSibling)
}

console.log(traverseDFS(root)) // A, B, D, E, C

function traverseBFS(node) {
  if (!node) return

  console.log(node.value) // Process the current node

  // Traverse the next sibling (if exists)
  traverseBFS(node.nextSibling)

  // Traverse the first child (if exists)
  traverseBFS(node.firstChild)
}

console.log(traverseBFS(root)) // A, B, C, D, E

//     A
//    / \
//   B   C
//  / \
// D   E
