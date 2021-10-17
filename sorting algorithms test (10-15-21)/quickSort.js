// Quick Sort
    // uses a divide and conquer technique 
        // works by having a pivot element where elements to the left are < it and elements to the right are > it
            // the pivot element can be any element in the array
    // select a pivot element
    // split the array into two arrays with those less than the pivot on the left, and those greater than the pivot on the right
    // carry out above steps recursively until we have subarrays of length 1
    // combine the subarrays to yield a sorted array

function partition(items, left, right) {
    // remember that left and right are pointers
    
    let pivot = items[Math.floor((right + left) / 2)],
    i = left,  //left pointer
    j = right;  //right pointer
    
    while (i <= j) {
        // increment left pointer if the value is less than the pivot
        while (items[i] < pivot) {
            i++;
        }
    
        // decrement right pointer if the value is more than the pivot
        while (items[j] > pivot) {
            j--;
        }
    
        // else we swap
        if (i <= j) {
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j--;
        }
    }
    
    // return the left pointer
    return i;
}
    
function quickSort(items, left, right) {
    let index;
    
    if (items.length > 1) {
        index = partition(items, left, right);  //get the left pointer
    
        if (left < index - 1) {
            // more elements on the left side
            quickSort(items, left, index-1);
        }
    
        if (index < right) {
            // more elements on the right side
            quickSort(items, index, right);
        }
    }
    
    return items;  //return the sorted array
}
    
// Some Notes:
    // JS's sort() method uses insertion sort
        // it is not appropriate when sorting large data sets
    // when using a large data set, one should consider sorting algorithms such as merge sort
    // generally, a divide and conquer based sorting algorithm is faster than a recursion based one