import { h } from "preact";
import styled, { keyframes } from "styled-components";

const Molehill = () => {
	return (
		<MolehillShape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 48">
			<MolehillGrass d="M178.955 46c2.22.433 4.471.973 6.725 1.434-.541.16-1.066.43-1.631.299-.712-.162-1.299-.813-2.117-.862.106.243.293.706.326.763-.793.094-1.357-.52-2.168-.406-.113.301-.29.551-.467.813-.85-.297-1.971-.97-2.674.022-.504-.295-1.02-.623-1.568-.853-1.104-.462-.729.284-1.563.343-.404.027-1.174-.795-1.664-.83-.744-.055-.922.291-.948.979-1.276.065-2.294-.115-3.36-.788-.389-.247-1.1-.964-1.56-.717-.195.105-.362.861-.468 1.082-1.065.154-1.891-.879-2.852-.83-.986.05-.822 1.154-1.992.785-.715-.223-1.828-1.199-2.605-1.032-.809.173-.816 1.269-.885 1.925-.81-.268-1.629-.682-2.435-1.001-.854-.339-2.358-1.249-3.271-1.079.133.355.3.738.232 1.155-.844-.38-2.039-.88-3.007-.731-.616 1.784-5.465-.654-6.86-.761.115.657.276 1.198-.515 1.229-.424.017-1.118-.42-1.514-.553-1.232-.422-2.972-1.546-4.31-1.518-.05.852.194 1.765.146 2.665-1.191-.115-2.682-1.562-3.881-1.32-.022.435-.004.884-.025 1.32-1.703.194-4.316-2.404-5.216-.419-.841-.248-3.035-2.526-3.297-.756-.474-.394-.688-1.077-1.201-1.432-.435.277-.651.569-1.126.684-.439.107-.962 0-1.389.104-1.274.303-2.522 1.391-3.816 1.693.507-.393 2.252-1.299 2.066-2.126a9.775 9.775 0 00-2.488.223c-.671.152-1.375.787-2.014.849-1.371.129-1.521-1.781-2.955-.764-.361.258-.816 1.057-1.209 1.1-.375.037-1.027-.617-1.396-.762-1.394-.548-1.805.264-2.688 1.125-.561-.215-.951-1.048-1.496-1.173-.592-.136-1.19.437-1.629.749-.168-.186-.428-.227-.592-.333.037.16-.059.399-.029.563-1.766.093-3.944.082-5.543-.572-.76-.313-1.442-.779-2.19-1.118-1.055-.474-1.412-.062-2.243.595-.592.467-1.257.981-2.059.84-.551-.1-1.25-.992-1.753-.998-1.418-.013-1.484 2.785-3.147 1.961-.894-.441-.89-1.043-1.845-.523-.941.51-.733.479-1.52-.087-.883-.638-.773-.086-1.493.323-.648.367-1.676.537-2.341.83.161-.58.864-1.051.784-1.625-1.016-.151-2.1.283-2.967-.26-.592-.371-.865-.9-1.626-1.037-1.743-.312-3.216.721-4.32 1.765-.16-.485-.243-1.707-.628-2.013-.493-.391-1.697.267-2.257.506-.65.277-1.442.914-2.087.761-.704-.168-.707-.79-1.651-.509-.579.174-1.25 1.144-1.819 1.095-.74-.065-.706-1.026-1.298-1.269-1.402-.571-2.928 1.672-4.243 1.502-.224-.342-.325-.741-.553-1.064-.934.124-2.317.947-3.286.747-1.045-.217-1.165-1.202-2.255-.908-.514.14-1.092.757-1.629.742-.565-.015-.548-.515-.993-.661-.964-.314-2.185.889-3.18.813-.023-.197-.191-.354-.204-.563-1.049-.152-2.094.549-3.096.395-.234-1.61-3.553.008-4.463.332-.977.349-.968.254-1.542-.407-.46-.528-.42-.626-1.062-.437-.69.205-1.273.82-1.977 1.094-1.093.424-.679-.142-1.546-.571-.793-.394-1.22.383-2.016.487-.844.11-.677-.549-1.383-.742-.724-.197-1.915.58-2.611.738-1.227.275-.591-.367-1.536-.842-1.168-.582-3.823.694-4.788 1.276.422-.408.527-1.052-.017-1.257-.21-.077-1.067.273-1.31.318-1.186.229-2.97 1.164-4.142.935 0-.099-.026-.214-.026-.312-1.092-.082-1.994.649-3.081.666.084-.186-.007-.393.042-.582-.907.143-1.801.69-2.758.644.107-.107.173-.3.242-.39-.129.013-.271.04-.406.06v4.839h183.5V46h-10.292z" />
			<MolehillMount
				id="molehill-mound"
				fill="#5E3601"
				d="M166.023 42.993c-.582-.351-1.077-1.02-1.627-1.468-.594-.481-1.396-.822-1.626-1.47-4.566-1.948-8.494-4.405-13.148-6.279-1.742-1.772-3.645-3.07-5.056-5.003-.875-1.202-1.207-2.695-2.114-3.848-.563-.711-1.575-1.39-2.447-2.106-.79-.648-1.478-1.372-2.231-2.092-1.527-1.458-3.566-2.547-4.901-4.015-.889-.979-1.106-2.416-1.94-3.248-1.541-1.538-4.798-2.076-7.097-3.367-.109-.063-.166-.292-.405-.417-.816-.425-1.539-1.418-2.458-1.91-.561-.303-1.769-.605-2.734-.951-2.936-1.05-4.956-1.25-8.244-2.264-3.17-.981-5.323-1.691-8.926-1.722-8.956-.078-16.419 2.17-23.357 5.023-.797.329-1.676.487-2.422.831-.131.06-.281.49-.467.557-2.759 1.023-5.646 2.845-8.651 3.97-3.58 1.341-7.251 2.271-9.51 3.916-.647.469-1.342 1.115-2.044 1.635-1.66 1.229-3.321 2.997-4.807 4.398.037 1.077-.778 1.277-.794 2.296-3.557 3.148-7.476 6.012-11.556 8.879-2.458 1.726-5.097 3.03-8.046 4.593-.452.238-1.425.541-1.995.855-2.729 1.503-6.449 3.907-9.573 4.889-4.559 1.436-10.455 1.902-14.86 2.948.224.522.427.348 1.184.193.644-.133 1.356-.276 1.985-.34-.069.091-.135.283-.242.39.957.047 1.851-.501 2.758-.643-.049.189.042.396-.042.581 1.087-.016 1.989-.748 3.081-.665 0 .098.026.213.026.311 1.172.229 2.956-.706 4.142-.934.243-.045 1.1-.396 1.31-.318.544.204.439.848.017 1.256.965-.582 3.62-1.859 4.788-1.276.945.474.309 1.117 1.536.841.696-.157 1.887-.935 2.611-.737.706.193.539.852 1.383.741.796-.104 1.223-.88 2.016-.487.867.43.453.996 1.546.571.704-.273 1.287-.888 1.977-1.093.642-.19.602-.092 1.062.436.574.661.565.756 1.542.408.91-.325 4.229-1.943 4.463-.333 1.002.155 2.047-.546 3.096-.394.013.208.181.365.204.562.995.077 2.216-1.126 3.18-.812.445.146.428.646.993.661.537.014 1.115-.603 1.629-.742 1.09-.294 1.21.691 2.255.908.969.2 2.352-.623 3.286-.747.228.323.329.723.553 1.065 1.315.17 2.841-2.074 4.243-1.503.592.243.558 1.203 1.298 1.269.569.049 1.24-.921 1.819-1.095.944-.281.947.341 1.651.509.645.153 1.437-.483 2.087-.761.56-.239 1.764-.896 2.257-.506.385.306.468 1.528.628 2.013 1.104-1.044 2.577-2.076 4.32-1.765.761.137 1.034.666 1.626 1.037.867.544 1.951.109 2.967.261.08.574-.623 1.045-.784 1.624.665-.292 1.693-.462 2.341-.829.72-.41.61-.962 1.493-.324.787.566.579.596 1.52.087.955-.519.951.082 1.845.523 1.663.824 1.729-1.973 3.147-1.96.503.005 1.202.898 1.753.997.802.142 1.467-.373 2.059-.839.831-.656 1.188-1.068 2.243-.595.748.339 1.43.806 2.19 1.118 1.599.654 3.777.665 5.544.573-.03-.165.065-.404.029-.564.163.107.423.147.592.333.438-.313 1.036-.885 1.629-.749.544.125.935.958 1.496 1.172.883-.861 1.295-1.672 2.688-1.125.368.146 1.02.8 1.395.762.393-.042.848-.842 1.21-1.099 1.434-1.018 1.584.893 2.955.763.638-.061 1.342-.696 2.013-.848a9.825 9.825 0 012.488-.223c.186.828-1.559 1.733-2.066 2.126 1.294-.302 2.542-1.391 3.817-1.693.426-.103.948.004 1.388-.104.475-.114.691-.406 1.126-.683.513.354.727 1.038 1.201 1.432.262-1.771 2.456.507 3.297.755.9-1.985 3.513.614 5.216.419.022-.436.003-.886.026-1.32 1.198-.242 2.688 1.205 3.88 1.32.048-.9-.196-1.813-.147-2.665 1.339-.028 3.078 1.096 4.31 1.517.396.134 1.09.57 1.514.553.791-.031.63-.572.514-1.229 1.396.106 6.245 2.545 6.861.76.968-.148 2.163.352 3.007.732.067-.417-.1-.8-.233-1.155.912-.17 2.417.74 3.271 1.079.805.32 1.625.734 2.434 1.001.069-.656.076-1.752.885-1.925.777-.167 1.891.81 2.605 1.032 1.17.37 1.007-.735 1.993-.785.96-.048 1.786.985 2.852.831.105-.221.272-.978.467-1.082.46-.248 1.171.469 1.56.716 1.066.673 2.083.853 3.36.788.026-.688.204-1.034.948-.979.49.035 1.26.857 1.664.829.834-.058.46-.804 1.563-.342.549.23 1.065.558 1.568.852.703-.991 1.825-.319 2.674-.022.177-.262.354-.512.467-.814.81-.113 1.375.501 2.168.407-.034-.057-.22-.519-.327-.763.819.05 1.406.7 2.118.863.564.131 1.09-.139 1.631-.3-2.396-.489-4.791-1.078-7.146-1.521-4.554-.857-9.158-.898-12.511-2.919z"
			/>
			<MolehillStroke
				id="molehill-stroke"
				fill="none"
				stroke="#000"
				strokeWidth="6"
				strokeMiterlimit="10"
				d="M.418 48c1.013-.413 3.207-1.074 4.219-1.156 1.012-.082 4.388-.576 4.388-.576h3.966s2.193-1.404 2.7-1.486c.505-.084 3.207-.991 3.882-1.239.674-.247 3.122-1.401 3.459-1.567.338-.166 2.109-1.156 2.363-1.404.253-.246 3.544-1.898 4.135-2.146.59-.248 2.278-1.154 2.7-1.402s2.785-1.403 2.785-1.403 1.603-1.569 2.699-2.147c1.098-.578 2.533-1.486 3.46-2.063.928-.577 1.603-1.239 2.109-1.651.507-.413 1.604-1.979 2.279-2.642.675-.66 1.771-1.899 2.278-2.231.507-.327 2.11-2.724 2.363-2.971.253-.248 2.785-2.394 2.785-2.394s1.856-1.321 2.616-1.817 1.941-1.155 2.701-1.569c.758-.413 3.627-1.321 4.218-1.486.59-.165 2.7-.826 3.207-.991.506-.166 3.29-1.404 4.219-1.899.928-.496 1.772-1.073 2.531-1.568.76-.496 1.772-1.239 2.025-1.321.253-.083 4.557-1.816 4.557-1.816s2.447-.908 3.038-1.156c.591-.247 1.941-.495 2.617-.743.674-.248 2.447-.743 3.29-.908.843-.165 2.7-.496 3.207-.661.506-.166 3.038-.33 3.628-.413.59-.083 2.025-.331 3.292-.331 1.265 0 3.794-.166 4.132 0s3.209.991 4.053 1.156c.845.165 4.134.742 4.555.825.423.083 3.208.579 3.462.661.253.083 1.772.578 2.446.826.675.248 3.459 1.817 3.459 1.817s2.277 1.073 2.531 1.238 2.447 1.569 2.447 1.569l2.193 1.568 2.531.826.759 1.651.928 1.486s1.015 1.487 1.521 1.651c.506.165 3.629 1.734 3.629 1.734s1.771 1.899 1.938 2.146c.171.248 1.521 2.23 1.772 2.313.253.082 1.689 1.734 1.689 1.734s1.434 2.807 1.771 2.725 1.687 2.889 1.687 2.889l3.122 1.816 2.955 1.734s2.614 1.154 2.867 1.238c.254.082 2.278 1.156 2.278 1.156l1.94 1.156 2.279 1.403 2.276 2.229 1.772.495 4.388.991 4.219.824 2.447.578 2.532.412 3.458.744 3.208.494 2.699.247 2.362.166 1.182.66"
			/>
		</MolehillShape>
	);
};

const MolehillShape = styled.svg`
	bottom: 0;
	left: 0;
	pointer-events: none;
	position: absolute;
	width: 100%;
`;

const drawStroke = keyframes`
	from {
		stroke-dashoffset: 500;
	}
	to {
		stroke-dashoffset: 275;
	}
`;

const fadeMound = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const MolehillMount = styled.path`
	animation: ${fadeMound} 2s linear;
`;

const MolehillGrass = styled.path`
	fill: var(--grass);
`;

const MolehillStroke = styled.path`
	/* animation: ${drawStroke} 1.25s cubic-bezier(0.24, 1.14, 1, 1) infinite; */
	animation: ${drawStroke} 1s ease-in-out;
	stroke-dasharray: 500;
`;

export default Molehill;
