class Tree {}
class Leaf extends Tree {}
class Branch extends Tree {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
}

function treeToParens(tree) {
  if (tree instanceof Leaf) {
    return "()";
  } else {
    return `(${treeToParens(tree.left)}${treeToParens(tree.right)})`;
  }
}

function parensToTree(str) {
  let stack = [];
  let i = 0;
  while (i < str.length) {
    let c = str[i];
    if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      let right = stack.pop();
      let left = stack.pop();
      stack.pop(); // remove the opening "("
      let node = new Branch(left, right);
      stack.push(node);
    }
    i++;
  }
  return stack.pop();
}
