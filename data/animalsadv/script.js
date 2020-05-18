document.title = "Dòngwu";

config.title = "Dòngwu";
config.range = 16;
config.gameLength = 60;

config = [Object.assign({}, config, {
	title: 'Dòngwu - Level 1',
	columns: 2,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: 0,
	scoreDeltaNone: 0,
	scoreThreshold: 5,
	holdCardRatio: 0
}), Object.assign({}, config, {
	title: 'Dòngwu - Level 2',
	columns: 3,
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 0.5
}), Object.assign({}, config, {
	title: 'Dòngwu - Level 3',
	columns: 3,
	matching: 'target',
	scoreDeltaMatch: 1,
	scoreDeltaMismatch: -1,
	scoreDeltaNone: -1,
	scoreThreshold: 8,
	holdCardRatio: 1
})];

loadSound([
    "5e9cda08037c6b87b73250f1.mp3",
    "5e9cda09037c6b87b73250f2.mp3",
    "5e9cda09037c6b87b73250f3.mp3",
    "5e9cda09037c6b87b73250f4.mp3",
    "5e8dab8369c2516911ea4531.mp3",
    "5e8dab8369c2516911ea4530.mp3",
    "5e9cda0b037c6b87b73250f5.mp3",
    "5e9cda0b037c6b87b73250f6.mp3",
    "5e9cda0b037c6b87b73250f7.mp3",
    "5e9cda0c037c6b87b73250f8.mp3",
    "5e8dab8369c2516911ea4532.mp3",
    "5e9cda0d037c6b87b73250f9.mp3",
    "5e9cda0d037c6b87b73250fa.mp3",
    "5e9cda0d037c6b87b73250fb.mp3",
    "5e9cda0e037c6b87b73250fc.mp3",
    "5e9cda0e037c6b87b73250fd.mp3"
]);
