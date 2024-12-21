const tf = require('@tensorflow/tfjs');  // For ML model

// Example of a scoring function (this should be trained or based on rules)
function scoreFight(fightData) {
    let score = 0;

    // Scoring based on strikes, takedowns, etc.
    if (fightData.strikes > 50) score += 10;
    if (fightData.takedowns > 2) score += 5;

    return score;
}

module.exports = { scoreFight };
