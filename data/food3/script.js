document.title = "Shíwù (3)";

config.title = "Shíwù (3)";
config.range = 11;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shíwù (3) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shíwù (3) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shíwù (3) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8dad947aa6d6552ebb39b0.mp3",
    "5ec1d0765f5aaa74c0065972.mp3",
    "5ec1d0765f5aaa74c0065973.mp3",
    "5ec1d0775f5aaa74c0065974.mp3",
    "5ec1d0775f5aaa74c0065975.mp3",
    "5ec1d0775f5aaa74c0065976.mp3",
    "5ec1d0785f5aaa74c0065977.mp3",
    "5ec1d0785f5aaa74c0065978.mp3",
    "5ec1d0795f5aaa74c0065979.mp3",
    "5ec1d0795f5aaa74c006597a.mp3",
    "5ec1d07a5f5aaa74c006597b.mp3"
]);
