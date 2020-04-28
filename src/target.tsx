import { h } from "preact";
import styled from "styled-components";
import Card from "./card";
import { MoleLabel, MolehillWrapper } from "./mole";
import Molehill from "./svg/molehill";

function Target(props) {
	const { time } = props;

	return (
		<MoleLabel>
			<TargetWrapper>
				<Card type="target" id={1} marginTop="10%" />
			</TargetWrapper>
			<MolehillWrapper>
				<Molehill time={time} />
			</MolehillWrapper>
		</MoleLabel>
	);
};

const TargetWrapper = styled.div`
	position: relative;
	height: 100%;
	max-width: 12rem;
	min-width: 8rem;
	overflow: hidden;
	width: calc(15vw + 5rem);
`;

export default Target;
