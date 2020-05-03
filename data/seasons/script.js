document.title = "Jìjié";

config.title = "Jìjié";
config.range = 5;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Jìjié - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Jìjié - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Jìjié - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9ccac2d50a14ecf823ab95.mp3",
    "5e9ccac3d50a14ecf823ab96.mp3",
    "5e9ccac4d50a14ecf823ab97.mp3",
    "5e9ccac5d50a14ecf823ab98.mp3",
    "5e9ccac6d50a14ecf823ab99.mp3"
]);
