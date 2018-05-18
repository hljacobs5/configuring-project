let unsortedArray = [1, 3, 5, 6, 2, 9, 4];

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberSort = array[i];

    for (var j = i - 1; array[j] > numberSort; j--) {
        array[j + 1] = array[j]; 
    }
      array[j + 1] = numberSort;
  }
   return array;
}

insertionSort(unsortedArray)

module.exports = insertionSort;
