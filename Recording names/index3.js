const readline = require('readline-sync');

function recordNames() {
    const names = [];

    console.log("Enter names. Type 'done' when finished.");

    while (true) {
        const name = readline.question("Enter a name: ");
        if (name.toLowerCase() === 'done') {
            break;
        }
        names.push(name);
    }

    return names;
}

function findDuplicates(names) {
    const duplicates = {};
    const duplicateNames = [];

    // Count occurrences of each name
    for (const name of names) {
        if (duplicates[name]) {
            duplicates[name]++;
        } else {
            duplicates[name] = 1;
        }
    }

    // Extract duplicate names
    for (const name in duplicates) {
        if (duplicates[name] > 1) {
            duplicateNames.push(name);
        }
    }

    return duplicateNames;
}

function main() {
    const allNames = recordNames();

    // Sort names alphabetically
    allNames.sort();

    console.log("\nAll names entered (sorted alphabetically):");
    allNames.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });

    const duplicateNames = findDuplicates(allNames);

    if (duplicateNames.length > 0) {
        console.log("\nDuplicate names:");
        duplicateNames.forEach((name) => {
            console.log(name);
        });
    } else {
        console.log("\nNo duplicate names found.");
    }
}

main();
