document.title = "Dòngwùyuán (1)";

config.title = "Dòngwùyuán (1)";
config.range = 9;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Dòngwùyuán (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Dòngwùyuán (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0.5
})];

loadSound([
    "5eadf93a8f2afc15aed00f38.mp3",
    "5e8dab8369c2516911ea4536.mp3",
    "5eadf93b8f2afc15aed00f39.mp3",
    "5e8dab8369c2516911ea453a.mp3",
    "5eadf93c8f2afc15aed00f3a.mp3",
    "5e8dab8369c2516911ea453c.mp3",
    "5e8dab8369c2516911ea4534.mp3",
    "5eadf93f8f2afc15aed00f3b.mp3",
    "5e8dab8369c2516911ea452e.mp3"
]);
