

function RollDice() {
    // get values from html
    const dieType = document.getElementById('dieType').value;
    const diceCount = document.getElementById('diceCount').value;
    const output = document.getElementById('outputNum');

    // run funciton, output end value
    output.innerHTML = DiceRoll(dieType, diceCount);
}

// take d# type and number of dice, return sum total of rolls
function DiceRoll(type, count) {
    let total = 0;
    // generate random single roll, add to total
    for (i=0; i < count; i++) {total = total + Math.floor(Math.random() * type + 1);}
    return total;
}