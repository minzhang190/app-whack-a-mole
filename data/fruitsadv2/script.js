document.title = "Shuǐguǒ (2)";

config.title = "Shuǐguǒ (2)";
config.range = 14;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shuǐguǒ (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shuǐguǒ (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shuǐguǒ (2) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8bf944f6082885ff046ab3.mp3",
    "5eb792e79d5b9f0e47f908b7.mp3",
    "5e8bf941f6082885ff046aaf.mp3",
    "5eb792e79d5b9f0e47f908b8.mp3",
    "5e8bf943f6082885ff046ab2.mp3",
    "5eb792e89d5b9f0e47f908b9.mp3",
    "5e8bf93ff6082885ff046aad.mp3",
    "5e8bf93ef6082885ff046aac.mp3",
    "5e8bf940f6082885ff046aae.mp3",
    "5e8bf942f6082885ff046ab1.mp3",
    "5e8bf93ef6082885ff046aab.mp3",
    "5eb792e99d5b9f0e47f908ba.mp3",
    "5eb792ea9d5b9f0e47f908bb.mp3",
    "5eb792ea9d5b9f0e47f908bc.mp3"
]);
