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

function main() {
    const allNames = recordNames();

    console.log("\nAll names entered:");
    allNames.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

main();
