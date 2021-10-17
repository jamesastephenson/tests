// Insertion Sort
    // uses recursion technique
    // there is a sorted and unsorted portion of arr
        // you have to compare elements from the unsorted portion one by one-
        // -then insert them into the sorted portion in the correct order
function insertionSort(arr) {
    // start from second element
    for (i = 1; i < arr.length; i++) {
        // go through elements behind it
        for (j = i - 1; j > -1; j--) {
            // value comparison in ascending order
            if (arr[j + 1] > arr[j]) {
            // swap
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    };
    return arr;
}

// insertion sort and bubble sort have the same big O notation, but that does not mean they run the same
    // they will have a similar graph of complexity as you add items, but what insertion has to execute is much quicker than bubble sort

// Some Notes:
    // JS's sort() method uses insertion sort
        // it is not appropriate when sorting large data sets
    // when using a large data set, one should consider sorting algorithms such as merge sort
    // generally, a divide and conquer based sorting algorithm is faster than a recursion based one