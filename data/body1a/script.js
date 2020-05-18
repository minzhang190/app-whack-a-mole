document.title = "Shēntǐ (1A)";

config.title = "Shēntǐ (1A)";
config.range = 8;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shēntǐ (1A) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shēntǐ (1A) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5e943b2b25c505681d0f1dee.mp3",
    "5e8dac932c02d5b61d430631.mp3",
    "5e8dac932c02d5b61d43063c.mp3",
    "5e8dac932c02d5b61d43062e.mp3",
    "5e8dac932c02d5b61d43062f.mp3",
    "5e943b2d25c505681d0f1def.mp3",
    "5e8dac932c02d5b61d43062d.mp3",
    "5e8dac932c02d5b61d430630.mp3"
]);
