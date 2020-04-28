import { h } from "preact";
import styled from "styled-components";
import Molehill from "./svg/molehill";

function Target(props) {
	const { time } = props;

	return (
		<TargetLabel>
			<TargetWrapper>
				<TargetCard className={`target-card card-1`} />
			</TargetWrapper>
			<MolehillWrapper>
				<Molehill time={time} />
			</MolehillWrapper>
		</TargetLabel>
	);
};

const TargetLabel = styled.label`
	height: 100%;
	overflow: hidden;
	padding: 0 5%;
	place-self: end center;
`;

const TargetWrapper = styled.div`
	position: relative;
	height: 100%;
	max-width: 12rem;
	min-width: 8rem;
	overflow: hidden;
	width: calc(15vw + 5rem);
`;

const MolehillWrapper = styled.div`
	bottom: 0;
	left: -5%;
	position: relative;
	width: 110%;
`;

const TargetCard = styled.div`
	position: absolute;
	width: 92%;
	left: 4%;
	padding-top: 69%;
	margin-top: 10%;
	box-sizing: border-box;
	border: .4rem solid black;
	background: white top/80% no-repeat;
	background-image: url(https://avatars2.githubusercontent.com/u/26872990);
`;

export default Target;
