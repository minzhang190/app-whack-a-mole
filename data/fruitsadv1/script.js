document.title = "Shuǐguǒ (1)";

config.title = "Shuǐguǒ (1)";
config.range = 14;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shuǐguǒ (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shuǐguǒ (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shuǐguǒ (1) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8bf93cf6082885ff046aa8.mp3",
    "5e8bf93af6082885ff046aa6.mp3",
    "5e8bf93bf6082885ff046aa7.mp3",
    "5e8bf93cf6082885ff046aa9.mp3",
    "5e8bf947f6082885ff046ab8.mp3",
    "5e8bf946f6082885ff046ab7.mp3",
    "5e8bf944f6082885ff046ab4.mp3",
    "5e8bf945f6082885ff046ab5.mp3",
    "5e8bf93df6082885ff046aaa.mp3",
    "5e8bf948f6082885ff046ab9.mp3",
    "5eb792e69d5b9f0e47f908b4.mp3",
    "5eb792e69d5b9f0e47f908b5.mp3",
    "5e8bf942f6082885ff046ab0.mp3",
    "5eb792e69d5b9f0e47f908b6.mp3"
]);
