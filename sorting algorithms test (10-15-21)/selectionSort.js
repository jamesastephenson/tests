// Selection Sort
    // uses recursion technique
    // given an array, assume first elem is the smallest
    // from other portion of arr, find the minimum val and swap with first elem
    // repeat the same procedure with the rest of the arr comparing the elements to the right
    function selectionSort(arr) {
        let min;
    
        // start passes
        for (i = 0; i < arr.length; i++) {
            // index of the smallest element to be ith element
            min = 1;
    
            // check through the rest of the arr for a lesser element
            for (j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
    
            // compare the indeces
            if (min !== i) {
                // swap
                [arr[i], arr[min]] = [arr[min], arr[i]];
            }
        }
        return arr;
    }
