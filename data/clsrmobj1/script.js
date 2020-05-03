document.title = "Jiàoshì Yòngpǐn (1)";

config.title = "Jiàoshì Yòngpǐn (1)";
config.range = 12;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (1) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9cc6ec83dd7905aa16c67f.mp3",
    "5e9cc6ec83dd7905aa16c680.mp3",
    "5e8dafd4fe028112aa073e72.mp3",
    "5e8dafd4fe028112aa073e6e.mp3",
    "5e9cc6ee83dd7905aa16c681.mp3",
    "5e9cc6ee83dd7905aa16c682.mp3",
    "5e9cc6ee83dd7905aa16c683.mp3",
    "5e9cc6ef83dd7905aa16c684.mp3",
    "5e9cc6ef83dd7905aa16c685.mp3",
    "5e8dafd4fe028112aa073e6f.mp3",
    "5e9cc6f083dd7905aa16c686.mp3",
    "5e8dafd4fe028112aa073e73.mp3"
]);
