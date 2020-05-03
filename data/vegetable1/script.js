document.title = "Shūcài (1)";

config.title = "Shūcài (1)";
config.range = 14;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shūcài (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shūcài (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shūcài (1) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8dadcf3018c62731acd17a.mp3",
    "5e8dadcf3018c62731acd17c.mp3",
    "5eadf9d98deb5b71a395fe03.mp3",
    "5e8dadcf3018c62731acd17b.mp3",
    "5eadf9db8deb5b71a395fe04.mp3",
    "5e8dadcf3018c62731acd17f.mp3",
    "5eadf9dc8deb5b71a395fe05.mp3",
    "5eadf9dd8deb5b71a395fe06.mp3",
    "5eadf9de8deb5b71a395fe07.mp3",
    "5e8dadcf3018c62731acd17e.mp3",
    "5eadf9e08deb5b71a395fe08.mp3",
    "5eadf9e08deb5b71a395fe09.mp3",
    "5eadf9e18deb5b71a395fe0a.mp3",
    "5eadf9e28deb5b71a395fe0b.mp3"
]);
