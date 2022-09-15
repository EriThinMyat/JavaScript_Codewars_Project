// Description 

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s){
    let a = s.match(/[0-9]/g);
    return Number(a.map(a => Number(a)).join(''));
}