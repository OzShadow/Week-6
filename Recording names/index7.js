function arraySwap(arrayA, arrayB) {
    // Create a copy of arrayA to avoid modifying it directly while swapping
    const tempArray = [...arrayA];

    // Copy elements from arrayB to arrayA
    arrayA.length = 0;
    arrayB.forEach(item => arrayA.push(item));

    // Copy elements from the temporary array (copy of arrayA) to arrayB
    arrayB.length = 0;
    tempArray.forEach(item => arrayB.push(item));
}

// Example usage:
let A = [1, 2, 3, 4, 5, 6];
let B = [5, 6, 7, 8, 9, 10];

console.log("Before swapping:");
console.log("A =", A);
console.log("B =", B);

arraySwap(A, B);

console.log("\nAfter swapping:");
console.log("A =", A);
console.log("B =", B);
