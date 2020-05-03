document.title = "Dòngwùyuán (2)";

config.title = "Dòngwùyuán (2)";
config.range = 9;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Dòngwùyuán (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Dòngwùyuán (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5eadf9408f2afc15aed00f3c.mp3",
    "5eadf9418f2afc15aed00f3d.mp3",
    "5eadf9428f2afc15aed00f3e.mp3",
    "5eadf9438f2afc15aed00f3f.mp3",
    "5eadf9448f2afc15aed00f40.mp3",
    "5e8dab8369c2516911ea4539.mp3",
    "5e8dab8369c2516911ea452f.mp3",
    "5eadf9468f2afc15aed00f41.mp3",
    "5e8dab8369c2516911ea453d.mp3"
]);
