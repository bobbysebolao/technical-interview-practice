#!/usr/bin/env node

function scoreDice(category, dice_values) {
    return 14;
}

example_dice = [4,5,5,6,1];

console.log("The score for the dice in the chance category is:", scoreDice("chance", example_dice));

module.exports = { scoreDice };
