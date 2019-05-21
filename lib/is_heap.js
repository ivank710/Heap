// you may assume that the array will always have a null element at the 0-th index

function getLeft(idx) {
  return 2 * idx;
}

function getRight(idx) {
  return 2 * idx + 1;
}
 
function isMaxHeap(array, idx=1) {
  if (array.length === 1) return true;

  for (let i = 1; i < array.length; i++) {
    let leftChild = getLeft(i);
    let rightChild = getRight(i);
    let left = array[leftChild] ? array[leftChild] : -Infinity;
    let right = array[rightChild] ? array[rightChild] : -Infinity;
    let curr = array[i];

    if (curr < left || curr < right) return false;
  }

  return true;
}


module.exports = {
    isMaxHeap
};