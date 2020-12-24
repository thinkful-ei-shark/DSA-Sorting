//1. Understanding merge sort
//a. left array: [21, 1], [26, 45], [29, 28], [2, 9]
// right array: [16, 49], [39, 27], [43, 34], [46, 40]
//b. left array: [1, 21, 26, 45] [2,9,28,29]
//right array: [16, 27, 39, 39] [34, 40, 43, 46]
//c. left array: [1,2,9,21,26,28,29]
//  right array: [16,27,34,39,40,43,46,49]
//d. [28, 29] [2,9]

//2a. The pivot could have been either 14 or 17.
//2b. 1. [13, 10, 3, 9, 12,14,17,15,19,16]
//2. [10,3,9,12,14,17,13,15,19,16]

//    3. Implementing quicksort
function quicksort(array, leftBound = 0, rightBound = array.length - 1) {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
}

function partition(array, leftIndex, rightIndex) {
  const pivot = array[Math.floor(leftIndex + rightIndex) / 2];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

// 4. Implementing merge sort
const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
};
