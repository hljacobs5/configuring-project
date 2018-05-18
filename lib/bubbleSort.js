let array = [1, 3, 5, 6, 2, 9, 4];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < (array.length - i); j++) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
            }
        }
    }
    return array;
}

bubbleSort(array);
