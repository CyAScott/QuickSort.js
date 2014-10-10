QuickSort.js
============

This file implements the Quick Sort algorithm in JavaScript using iteration instead of recursion.  This is a modified version of what can be found at this site: http://www.geeksforgeeks.org/iterative-quick-sort/. After adding this file to your JS project, every array will have the function “quickSort(compare, swap)”. 

Both of these arguments are optional and are useful when dealing with complex data structures that are not simple 1 dimensional arrays with all the same element types.

The “compare” argument should be a function that takes two arguments and returns a Boolean. This function should compare the two arguments and return true if argument1 is less than argument2.

The “swap” argument should be a function that takes tree arguments. The first argument is the source array, the second argument is index1, and the last argument is index2. The function should perform the swap operation for the array.
