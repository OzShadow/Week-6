const readline = require('readline-sync');

function getDayName(dayNumber) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Ensure dayNumber is in the range 1-7
    dayNumber = (dayNumber - 1) % 7;

    if (dayNumber < 0) {
        dayNumber += 7;
    }

    const dayName = daysOfWeek[dayNumber];
    return dayName;
}

function isWeekend(dayNumber) {
    return (dayNumber % 7 === 0 || dayNumber % 7 === 6);
}

function main() {
    const dayInput = parseInt(readline.question("What day is it on: "));
    
    if (dayInput === 0) {
        console.log("0 is not allowed.");
        return;
    }

    const dayName = getDayName(dayInput);
    const weekendStatus = isWeekend(dayInput);

    console.log(`Day ${dayInput} is ${dayName}, It is${weekendStatus ? ' ' : ' not '}the weekend`);
}

main();

