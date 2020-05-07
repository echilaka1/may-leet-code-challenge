var isCousins = function(root, x, y) {

	let parentX;
	let parentY;
	let depthX;
	let depthY;
	let level;

	const findParent = (node, parent) => {
		if(!node) return;

		if(node.val === x) parentX = parent;
		if(node.val === y) parentY = parent;        

		return (findParent(node.left, node.val), findParent(node.right, node.val));

	};
	findParent(root);

	const findDepth = (node, level = 0) => {
		if(!node) return;

		if(node.val === x) depthX = level;        
		if(node.val === y) depthY = level;

		return (findDepth(node.left, level + 1), findDepth(node.right, level + 1));

	};
	findDepth(root, level);

	return (parentX !== parentY && depthX === depthY);
  
};