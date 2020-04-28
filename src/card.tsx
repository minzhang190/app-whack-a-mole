import { h } from "preact";
import styled from "styled-components";

function Card(props) {
	const { id, type, marginTop } = props;

	return id != 0 ? (
		<Frame className={`${type}-card card-${id}`} style={{ 'margin-top': marginTop }}>
			<Text>{type}<br />card #{id}</Text>
		</Frame>
	) : null;
}

const Frame = styled.div`
	position: absolute;
	width: 92%;
	left: 4%;
	padding-top: 69%;
	box-sizing: border-box;
	border: .4rem solid black;
	background: white top/80% no-repeat;
`;

const Text = styled.div`
	width: 100%;
	margin-top: -69%;
	text-align: center;
`;

export default Card;
