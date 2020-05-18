document.title = "Shēntǐ (2A)";

config.title = "Shēntǐ (2A)";
config.range = 8;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shēntǐ (2A) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shēntǐ (2A) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5e8dac932c02d5b61d43063a.mp3",
    "5e943b3125c505681d0f1df1.mp3",
    "5e8dac932c02d5b61d430636.mp3",
    "5e943b3225c505681d0f1df2.mp3",
    "5e943b3225c505681d0f1df3.mp3",
    "5e8dac932c02d5b61d430634.mp3",
    "5e8dac932c02d5b61d430633.mp3",
    "5e8dac932c02d5b61d430635.mp3"
]);
