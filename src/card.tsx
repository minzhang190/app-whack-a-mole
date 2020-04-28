import { h } from "preact";
import styled from "styled-components";

function Card(props) {
	const { id, type, marginTop } = props;

	return id != 0 ? (
		<Frame className={`${type}-card card-${id}`} style={{ 'margin-top': marginTop }} />
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
	background-image: url(https://avatars2.githubusercontent.com/u/26872990);
`;

export default Card;
