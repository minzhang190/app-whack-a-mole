document.title = "Shēntǐ (2B)";

config.title = "Shēntǐ (2B)";
config.range = 7;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shēntǐ (2B) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shēntǐ (2B) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5e8dac932c02d5b61d430632.mp3",
    "5e943b3425c505681d0f1df4.mp3",
    "5e943b3425c505681d0f1df5.mp3",
    "5e8dac932c02d5b61d430637.mp3",
    "5e8dac932c02d5b61d43063e.mp3",
    "5e943b3625c505681d0f1df6.mp3",
    "5e943b3625c505681d0f1df7.mp3"
]);
