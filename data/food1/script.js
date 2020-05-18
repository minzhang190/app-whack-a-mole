document.title = "Shíwù (1)";

config.title = "Shíwù (1)";
config.range = 10;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shíwù (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shíwù (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shíwù (1) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5ec1d0605f5aaa74c0065962.mp3",
    "5ec1d0615f5aaa74c0065963.mp3",
    "5ec1d0615f5aaa74c0065964.mp3",
    "5ec1d0625f5aaa74c0065965.mp3",
    "5e8dad947aa6d6552ebb39b1.mp3",
    "5ec1d0635f5aaa74c0065966.mp3",
    "5ec1d0635f5aaa74c0065967.mp3",
    "5ec1d0645f5aaa74c0065968.mp3",
    "5e8dad947aa6d6552ebb39ad.mp3",
    "5ec1d06a5f5aaa74c0065969.mp3"
]);
