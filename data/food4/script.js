document.title = "Shíwù (4)";

config.title = "Shíwù (4)";
config.range = 10;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shíwù (4) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shíwù (4) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shíwù (4) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5ec1d07a5f5aaa74c006597c.mp3",
    "5ec1d07b5f5aaa74c006597d.mp3",
    "5ec1d07b5f5aaa74c006597e.mp3",
    "5ec1d07c5f5aaa74c006597f.mp3",
    "5ec1d07c5f5aaa74c0065980.mp3",
    "5ec1d07d5f5aaa74c0065981.mp3",
    "5ec1d07d5f5aaa74c0065982.mp3",
    "5ec1d07e5f5aaa74c0065983.mp3",
    "5ec1d07e5f5aaa74c0065984.mp3",
    "5ec1d07f5f5aaa74c0065985.mp3"
]);
