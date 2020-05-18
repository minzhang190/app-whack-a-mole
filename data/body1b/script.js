document.title = "Shēntǐ (1B)";

config.title = "Shēntǐ (1B)";
config.range = 7;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shēntǐ (1B) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shēntǐ (1B) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5e943b2e25c505681d0f1df0.mp3",
    "5e8dac932c02d5b61d43063d.mp3",
    "5e8dac932c02d5b61d43063b.mp3",
    "5e8dac932c02d5b61d430638.mp3",
    "5e8dac932c02d5b61d43062c.mp3",
    "5e8dac932c02d5b61d43063f.mp3",
    "5e8dac932c02d5b61d430639.mp3"
]);
