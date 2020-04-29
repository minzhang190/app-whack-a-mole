import { Fragment, h } from "preact";
import { useContext, useState } from "preact/hooks";
import { useEffect } from "react";
import styled from "styled-components";
import { GameContext } from ".";
import Card from "./card";
import Bow from "./svg/bow";
import Claws from "./svg/claws";
import Eyes from "./svg/eyes";
import FacialHair from "./svg/facial-hair";
import Glasses from "./svg/glasses";
import Mouth from "./svg/mouth";
import { IHitState, setRandomNumberByRange } from "./_utils";

const MoleSprite = (props: IHitState) => {
	const [context] = useContext(GameContext),
		{ config, moleCardIds } = context,
		{ id, isHit, cardId, setCardId } = props,
		colourList = ["#ff0505", "#f33aff", "#6b9cff", "#22e04f", "#ffa800"],
		[genderNum, setGenderNum] = useState(setRandomNumberByRange(1, 3)),
		[colourIndex, setColourIndex] = useState(setRandomNumberByRange(0, 4)),
		[glassesNum, setGlassesNum] = useState(setRandomNumberByRange(1, 5)),
		[monocleNum, setMonocleNum] = useState(setRandomNumberByRange(1, 10)),
		[tashNum, setTashNum] = useState(setRandomNumberByRange(1, 8)),
		[mouth, setMouth] = useState(setRandomNumberByRange(1, 2)),
		[hitMouth, setHitMouth] = useState(setRandomNumberByRange(1, 4));

	let isFemale = genderNum === 3, // 1 in 3 mole to be female
		colour = isFemale ? colourList[colourIndex] : "#fdefa5";

	useEffect(() => {
		// Randomise mole appearance just before they re-emerge
		if (!isHit) {
			setGenderNum(setRandomNumberByRange(1, 3));
			setColourIndex(setRandomNumberByRange(0, 4));
			setGlassesNum(setRandomNumberByRange(1, 5));
			setMonocleNum(setRandomNumberByRange(1, 10));
			setTashNum(setRandomNumberByRange(1, 8));
			setMouth(setRandomNumberByRange(1, 2));
			setHitMouth(setRandomNumberByRange(1, 4));
			moleCardIds[id] = setRandomNumberByRange(0, config.range);
			setCardId(moleCardIds[id]);
		}
	}, [isHit]);

	return (
		<Fragment>
			<svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute" }} viewBox="0 0 195 335">
				{isFemale && <Bow colour={colour} />}
				{!isHit && (
					<g id="brow" fill="#000">
						<path d="M126.473 48.363c-1.048-.208-1.065-.054-1.92-.24-1.496-3.449-2.074-5.295-6.479-6-1.518-.243-3.998-.278-5.28 0-2.89.625-4.312 4.136-6.239 4.56-1.77.389-4.558-1.767-3.119-3.6.348-.441 1.402-1.984 1.92-2.4.334-.269 1.063-.318 1.682-.72.93-.607 1.898-1.935 2.881-2.4 4.188-1.991 10.648.099 14.396 1.44 1.076 1.025 2.156 2.458 3.121 4.32.475.914.98 1.577.959 2.16-.055 1.449-.874 1.765-1.922 2.88z" />
						<path d="M86.619 43.294c.34.191.674.403.998.656.3.235.57.512.834.797.373-.029.732-.109 1.051-.291l.137-.08c1.354-1.342.403-3.38-1.309-4.528a21.997 21.997 0 00-1.386-.851 10.57 10.57 0 00-1.272-.475.2.2 0 00.213-.079 14.013 14.013 0 00-.717-.324c-7.998-1.776-17.383.594-19.673 7.201.373.251.745.499 1.146.688 1.197.566 2.258.455 3.339.151.187-.23.38-.454.573-.678 1.8-.801 3.261-2.096 5.28-2.64.026-.007.07-.001.101-.005.034-.023.058-.054.101-.07.748-.294.639-.271 1.357-.269.145-.025.293-.036.439-.059a.32.32 0 01.163-.078 16.35 16.35 0 012.583-.162 20.972 20.972 0 013.51.222c.762.115 1.458.34 2.118.658.174-.065.324-.051.414.216z" />
					</g>
				)}
				<Eyes isHit={isHit} />
				<g id="face">
					<path
						fill="#fec790"
						d="M127.275 90.974c-.57-.595-1.73-1.101-2.639-1.92-.775-.701-1.389-1.802-2.16-2.4-.572-.443-1.459-.487-2.16-.96-1.385-.932-2.477-2.037-3.84-2.88-.771-.475-1.345-1.144-1.92-1.44-.961-.493-2.468-.565-3.842-1.2-2.015-.93-3.615-2.155-5.053-2.529l-8.277-1.319c-.044.002-.08.006-.107.009-4.288.482-10.214 2.749-13.92 4.32-1.569.666-3.277 1.026-4.56 1.68-.878.448-1.668 1.387-2.64 1.92-1.041.572-2.25.861-3.12 1.44-.914.607-1.746 1.648-2.64 2.4-1.056.887-2.214 1.551-2.88 2.4-1.391 1.773-2.276 4.328-3.36 6.72-1.092 2.409-2.686 4.664-3.36 6.96-1.704 5.804-.569 12.226.24 18 .328 2.34.325 4.688.72 6.479.787 3.574 1.634 4.524 3.36 6.72.73.929 1.423 2.064 2.16 2.88 3.964 4.389 8.938 5.992 15.839 7.44 3.034.637 5.851 1.299 9.12 1.68 2.81.327 4.962-.309 7.441-.72 3.747-.622 5.895-.725 8.398-1.681 3.402-1.297 6.068-2.428 9.357-4.079 1.359-.683 2.813-1.853 4.563-1.921 1.247-1.817 3.528-2.366 5.038-3.84.668-.65.984-1.615 1.684-2.399.639-.724 1.516-1.271 2.158-1.92 2.947-2.964 3.842-4.392 4.801-8.88 1.984-9.288-1.248-18.417-4.801-25.44-.988-1.959-2.298-4.168-3.6-5.52z"
					/>
					<path
						fill="#000"
						d="M135.199 95.535c-1.346-2.736-2.059-4.136-3.6-6.24-1.481-2.021-2.287-2.872-3.842-4.08-1.68-1.307-3.119-2.593-4.8-3.84-1.095-.813-2.168-1.635-3.358-2.4-1.164-.747-2.275-1.823-3.359-2.4-.897-.476-2.362-.619-3.602-1.2-2.416-1.131-5.666-3.165-8.641-3.36-1.254-.082-2.051.476-3.12.48-.481.002-1.035-.44-1.683-.48-.814-.05-1.806.184-2.397.24-8.636.816-18.882 5.351-25.2 9.6-1.758 1.182-3.374 2.629-4.8 3.84-4.045 3.434-6.003 8.775-8.4 14.4-2.162 5.075-3.182 10.313-2.64 16.081.185 1.97.918 4.115 1.2 6.239.313 2.358.247 4.779.72 6.96.634 2.927 2.109 5.389 3.36 7.92 1.812 1.811 3.232 3.849 4.802 5.521.545.58 1.073 1.407 1.68 1.92 5.079 4.289 14.121 6.066 21.6 7.2 2.672.404 5.53 1.024 7.92.96 2.911-.079 6.288-1.126 9.603-1.681 6.616-1.107 11.986-4.064 16.801-6.96 2.423-1.46 5.461-2.702 7.438-4.56.842-.793 1.432-2.093 2.396-3.12 1.734-1.84 4.582-3.885 5.521-6 .592-1.332.65-2.904.961-4.561.291-1.558.816-3.071.959-4.079.676-4.816-.434-10.568-1.681-15.84-.947-4.021-2.394-7.629-3.838-10.56zm.479 26.399c-.959 4.488-1.853 5.916-4.8 8.88-.644.649-1.521 1.196-2.159 1.92-.697.784-1.015 1.749-1.683 2.399-1.509 1.474-3.791 2.023-5.038 3.84-1.749.068-3.203 1.238-4.563 1.921-3.289 1.651-5.955 2.782-9.358 4.079-2.505.956-4.651 1.059-8.399 1.681-2.478.411-4.63 1.047-7.44.72-3.269-.381-6.086-1.043-9.12-1.68-6.901-1.448-11.875-3.051-15.839-7.44-.737-.816-1.43-1.951-2.16-2.88-1.726-2.196-2.573-3.146-3.36-6.72-.395-1.791-.392-4.139-.72-6.479-.809-5.774-1.944-12.196-.24-18 .674-2.296 2.268-4.551 3.36-6.96 1.084-2.392 1.969-4.947 3.36-6.72.666-.849 1.824-1.513 2.88-2.4.894-.752 1.726-1.793 2.64-2.4.87-.579 2.079-.868 3.12-1.44.972-.533 1.762-1.472 2.64-1.92 1.283-.654 2.991-1.014 4.56-1.68 3.706-1.571 9.632-3.838 13.92-4.32.027-.003.063-.007.107-.009l8.277 1.319c1.437.374 3.038 1.599 5.053 2.529 1.374.635 2.88.707 3.841 1.2.576.296 1.15.965 1.92 1.44 1.364.843 2.455 1.948 3.84 2.88.701.473 1.588.517 2.16.96.772.598 1.385 1.699 2.16 2.4.908.819 2.068 1.325 2.639 1.92 1.303 1.352 2.611 3.561 3.604 5.52 3.55 7.023 6.783 16.152 4.798 25.44z"
					/>
				</g>
				<Glasses isHit={isHit} isFemale={isFemale} glassesNum={glassesNum} monocleNum={monocleNum} />
				<FacialHair isFemale={isFemale} tashNum={tashNum} />
				<Mouth isHit={isHit} isFemale={isFemale} mouth={mouth} hitMouth={hitMouth} />
			</svg>
			<Card type="mole" id={cardId} marginTop="48%" />
			<svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute" }} viewBox="0 0 195 335">
				<Claws colour={colour} holdCard={cardId !== 0} />
			</svg>
		</Fragment>
	);
};

export default MoleSprite;
