import yesNoWords from "yes-no-words";

let yesArray = [];

for (let i = 0; i < 5; i++) {
    yesArray.push(yesNoWords.yesRandom());
}

let noArray = [];

for (let i = 0; i < 5; i++) {
    noArray.push(yesNoWords.noRandom());
}

let combinedArray = [...yesArray, ...noArray];

console.log(combinedArray);