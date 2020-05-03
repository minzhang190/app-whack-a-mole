document.title = "Shūcài (2)";

config.title = "Shūcài (2)";
config.range = 14;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Shūcài (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Shūcài (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Shūcài (2) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8dadcf3018c62731acd17d.mp3",
    "5eadf9e48deb5b71a395fe0c.mp3",
    "5eadf9e58deb5b71a395fe0d.mp3",
    "5eadf9e68deb5b71a395fe0e.mp3",
    "5eadf9e78deb5b71a395fe0f.mp3",
    "5e8bf946f6082885ff046ab6.mp3",
    "5eadfb3dde049f5b7ba2f2ac.mp3",
    "5eadfb3fde049f5b7ba2f2ad.mp3",
    "5eadfb3fde049f5b7ba2f2ae.mp3",
    "5eadfb40de049f5b7ba2f2af.mp3",
    "5eadfb41de049f5b7ba2f2b0.mp3",
    "5eadfb42de049f5b7ba2f2b1.mp3",
    "5eadfcd6f9ba221b944caa98.mp3",
    "5eadfcd6f9ba221b944caa99.mp3"
]);
