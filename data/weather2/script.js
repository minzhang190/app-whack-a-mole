document.title = "Tiānqì (2)";

config.title = "Tiānqì (2)";
config.range = 12;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Tiānqì (2) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Tiānqì (2) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Tiānqì (2) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e8db08a26af9d56f020f496.mp3",
    "5e9cd3b9c9c8767483d77483.mp3",
    "5e9cd3bac9c8767483d77484.mp3",
    "5e9cd3bbc9c8767483d77485.mp3",
    "5e9cd3bcc9c8767483d77486.mp3",
    "5e9cd3bcc9c8767483d77487.mp3",
    "5e9cd3bdc9c8767483d77488.mp3",
    "5e9cd3bec9c8767483d77489.mp3",
    "5e9cd3bfc9c8767483d7748a.mp3",
    "5e9cd3c0c9c8767483d7748b.mp3",
    "5e9cd3c1c9c8767483d7748c.mp3",
    "5e9cd3c2c9c8767483d7748d.mp3"
]);
