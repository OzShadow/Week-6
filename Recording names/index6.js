function modulusMadness(n) {
    const range = 7; // Number of unique values in the sequence
    const offset = -3; // Offset value to start from -3

    for (let i = 0; i < n; i++) {
        const value = (i % range) + offset;
        console.log(value);
    }
}

// Example usage:
const iterations = 14; // Number of iterations
modulusMadness(iterations);
