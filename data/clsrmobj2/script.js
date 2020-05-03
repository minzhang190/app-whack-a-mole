document.title = "Jiàoshì Yòngpǐn (2)";

config.title = "Jiàoshì Yòngpǐn (2)";
config.range = 12;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (2) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9cc6f283dd7905aa16c687.mp3",
    "5e9cc6f383dd7905aa16c688.mp3",
    "5e9cc6f383dd7905aa16c689.mp3",
    "5e9cc6f483dd7905aa16c68a.mp3",
    "5e9cc6f583dd7905aa16c68b.mp3",
    "5e9cc6f683dd7905aa16c68c.mp3",
    "5e9cc6f683dd7905aa16c68d.mp3",
    "5e9cc6f783dd7905aa16c68e.mp3",
    "5e9cc6f883dd7905aa16c68f.mp3",
    "5e9cc6f983dd7905aa16c690.mp3",
    "5e9cc6fa83dd7905aa16c691.mp3",
    "5e9cc6fb83dd7905aa16c692.mp3"
]);
