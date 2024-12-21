const { analyzeFightVideo } = require('./videoProcessor');
const { scoreFight } = require('./scoringModel');

function main() {
    const fightVideoPath = './data/fight1.mp4';  // Path to your video
    const fightData = analyzeFightVideo(fightVideoPath);  // Analyze video
    
    const score = scoreFight(fightData);  // Score the fight
    console.log(`Fight Score: ${score}`);
}

main();
