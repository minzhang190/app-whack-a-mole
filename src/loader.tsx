export function ready(callback) {
	callback({
		title: 'Whack-a-mole!',
		columns: 2,
		range: 2,
		matching: null,
		scoreDeltaMatch: 1,
		scoreDeltaMismatch: -1,
		scoreDeltaNone: -2,
		scoreThreshold: 5,
		swapOnMatch: true,
		holdCardRatio: 0.5,
		gameLength: 20,
		moleDelayLow: 1500,
		moleDelayHigh: 1800,
		moleSpeedUp: 0.015
	});
}
