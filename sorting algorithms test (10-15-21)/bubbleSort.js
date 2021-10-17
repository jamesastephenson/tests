// Big O notation distills an algorithm down to a single expression which shows how it performs when you add more blocks
    // O(n^2) means the process time goes up with the square of the number of inputs (gets slow very fast as more inputs are added)
    // 0(1) is the fastest (usually just returning the first item of a list)
    // O(n) is linear, processing time goes up steadily with the number of items

// Bubble Sort
    // follows recursion technique
    // compare first two elems in arr, swap if required
    // continue until end of arr, will have a series of inner passes and an outer pass
    // repeat process until arr is sorted
function bubbleSort(arr) {
    // outer pass
    for (i = 0; i < arr.length; i++) {
        // inner pass
        for (j = 0; j < arr.length - 1; j++) {
            // value comparison using ascending order
            if (arr[j + 1] < arr[j]) {
                // swap values
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    };
    return arr;
};

// insertion sort and bubble sort have the same big O notation, but that does not mean they run the same
    // they will have a similar graph of complexity as you add items, but what insertion has to execute is much quicker than bubble sort