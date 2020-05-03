document.title = "Jiàoshì Yòngpǐn (3)";

config.title = "Jiàoshì Yòngpǐn (3)";
config.range = 13;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (3) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (3) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Jiàoshì Yòngpǐn (3) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8dafd4fe028112aa073e70.mp3",
    "5e8daed2f027c1f33241f487.mp3",
    "5e9cc6fd83dd7905aa16c693.mp3",
    "5e9cc6fe83dd7905aa16c694.mp3",
    "5e9cc6ff83dd7905aa16c695.mp3",
    "5e9cc6ff83dd7905aa16c696.mp3",
    "5e9cc70083dd7905aa16c697.mp3",
    "5e9cc70183dd7905aa16c698.mp3",
    "5e8dac67201d843588616dc8.mp3",
    "5e8dac67201d843588616dc7.mp3",
    "5e9cc70383dd7905aa16c699.mp3",
    "5e9cc70483dd7905aa16c69a.mp3",
    "5e9cc70483dd7905aa16c69b.mp3"
]);
