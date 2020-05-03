document.title = "Tiānqì (1)";

config.title = "Tiānqì (1)";
config.range = 12;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Tiānqì (1) - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Tiānqì (1) - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Tiānqì (1) - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9cd3b0c9c8767483d7747a.mp3",
    "5e9cd3b0c9c8767483d7747b.mp3",
    "5e9cd3b1c9c8767483d7747c.mp3",
    "5e9cd3b2c9c8767483d7747d.mp3",
    "5e9cd3b3c9c8767483d7747e.mp3",
    "5e9cd3b3c9c8767483d7747f.mp3",
    "5e8db08a26af9d56f020f497.mp3",
    "5e9cd3b5c9c8767483d77480.mp3",
    "5e8db08a26af9d56f020f494.mp3",
    "5e9cd3b6c9c8767483d77481.mp3",
    "5e8db08a26af9d56f020f495.mp3",
    "5e9cd3b7c9c8767483d77482.mp3"
]);
