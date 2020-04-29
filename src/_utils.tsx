import { useEffect, useRef } from "preact/hooks";
import { gameLength } from ".";

// Get a random number between a given range
export function setRandomNumberByRange(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomElementByClassName(className) {
	const elements = document.getElementsByClassName(className);

	if (elements.length === 0) {
		return null;
	}

	return elements[setRandomNumberByRange(0, elements.length - 1)];
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: any, delay: number | null) {
	const savedCallback: ISavedCallback = useRef();

	// Remember the latest function.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			// @ts-ignore
			savedCallback.current();
		}
		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

// Check if local storage is available
export function localStorageAvailable(): boolean {
	const mod: string = "test";

	try {
		localStorage.setItem(mod, mod);
		localStorage.removeItem(mod);
		return true;
	} catch (e) {
		return false;
	}
}

export function randomMismatchingCard(config, targetCardId) {
	let result = 0;

	if (config.range > 1 && Math.random() < config.holdCardRatio) {
		do {
			result = setRandomNumberByRange(1, config.range);
		} while (result === targetCardId);
	}

	return result;
}

export function initializeMoleCards(config, targetCardId) {
	const moleCardIds = {};

	moleCardIds[`mole-${setRandomNumberByRange(1, config.columns * 3 - 1)}`] = targetCardId;

	for (let i = 1; i <= config.columns * 3 - 1; i++) {
		if (moleCardIds[`mole-${i}`]) {
			continue;
		}

		moleCardIds[`mole-${i}`] = randomMismatchingCard(config, targetCardId);
	}

	return moleCardIds;
}

interface ISavedCallback {
	current?: Function;
}

export interface IContext {
	config: Object;
	countdown: Function;
	disableTitleScreen: Function;
	isCountdownActive: boolean;
	isGameOver: boolean;
	isFirstPlay: boolean;
	isMuted: boolean;
	isHighScore: boolean;
	playerHighScore: number;
	playerScore: number;
	setCountdownState: Function;
	setFirstPlayState: Function;
	setGameOverState: Function;
	setMutedState: Function;
	setHighScoreState: Function;
	timeRemaining: number;
	updateHighScore: Function;
	updateScore: Function;
}

export const defaultContext: IContext = {
	config: {},
	countdown: () => {
		return;
	},
	disableTitleScreen: () => {
		return;
	},
	isCountdownActive: false,
	isFirstPlay: true,
	isGameOver: false,
	isMuted: false,
	isHighScore: false,
	playerHighScore: 0,
	playerScore: 0,
	setCountdownState: () => {
		return;
	},
	setFirstPlayState: () => {
		return;
	},
	setGameOverState: () => {
		return;
	},
	setMutedState: () => {
		return;
	},
	setHighScoreState: () => {
		return;
	},
	timeRemaining: gameLength,
	updateHighScore: () => {
		return;
	},
	updateScore: () => {
		return;
	}
};

export interface IHitState {
	glassesNum?: number;
	hitMouth?: number;
	isHit?: boolean;
	isFemale?: boolean;
	monocleNum?: number;
	mouth?: number;
	tashNum?: number;
}
