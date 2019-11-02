import { h } from "preact";

const Claws = (props: IPropTypes) => {
	const { colour } = props,
		clawColour = colour !== null ? colour : "#fff3e6";

	return (
		<g id="claws" style={{ transform: "translate3d(0, -2rem, 0)" }}>
			<path
				fill={clawColour}
				d="M159.301 240.538c-.277-.021-.545.17-.685.418a.423.423 0 00-.159.255c-.063.307.006.551.014.852.006.33 0 .645.096.961.013.039.035.065.053.099.005.035.003.069.011.104.095.475.877.484.963 0 .013-.067.019-.141.027-.211.007-.031.021-.058.022-.094.019-.557.783-2.303-.342-2.384z"
			/>
			<path
				fill={clawColour}
				d="M172.514 240.549c-.051-.219-.219-.412-.466-.393a2.47 2.47 0 01-.344.016.542.542 0 00-.452.711c-.025.262.098.489.211.717.002.03.021.047.029.074l-.008.061c-.002.041.012.072.018.107h-.031c.187.537.504.939.479 1.684.333-.34.382-.963.464-1.557a.495.495 0 00.07-.234c.01-.192.047-.381.078-.57a.98.98 0 00.014-.482c-.013-.056-.039-.094-.062-.134z"
			/>
			<path fill={clawColour} d="M183.95 244.004c.01-1.51.461-2.578.721-3.84h-1.68c.346 1.01-.13 3.024.959 3.84z" />
			<path
				fill={clawColour}
				d="M137.18 240.711a.378.378 0 00-.187-.1c-.997-.139-1.21.842-.872 1.596.014.635.193 1.352.309 1.559.338-.338.629-1.016.65-1.625.134-.193.204-.418.246-.68v-.004l.063-.215a.462.462 0 00-.209-.531z"
			/>
			<path fill={clawColour} d="M146.029 242.326c-.367 1.084.209 3.094.479 4.318.537-1.043.578-3.383.962-3.84-.261-.24-1.178-1.031-1.441-.478z" />
			<path
				fill={clawColour}
				d="M23.297 240.172a2.476 2.476 0 01-.344-.016c-.248-.02-.416.174-.466.393-.023.04-.049.078-.063.131a.983.983 0 00.015.483c.03.19.067.378.077.571a.488.488 0 00.071.232c.083.594.13 1.219.464 1.559-.025-.744.293-1.146.479-1.685h-.031c.006-.036.019-.065.017-.106-.001-.021-.005-.041-.007-.062.008-.026.027-.044.03-.073.114-.229.236-.455.211-.718a.541.541 0 00-.453-.709z"
			/>
			<path fill={clawColour} d="M47.531 242.805c.382.457.423 2.797.96 3.84.271-1.225.848-3.233.48-4.317-.262-.555-1.179.236-1.44.477z" />
			<path
				fill={clawColour}
				d="M36.385 240.956c-.14-.248-.408-.438-.685-.418-1.124.081-.36 1.827-.34 2.384.001.036.016.063.022.094.01.07.015.144.027.211.087.484.869.475.964 0 .007-.035.005-.07.01-.104.018-.032.041-.06.052-.099.096-.316.089-.631.096-.961.006-.301.076-.545.013-.852a.433.433 0 00-.159-.255z"
			/>
			<path
				fill={clawColour}
				d="M58.008 240.611a.386.386 0 00-.187.1.461.461 0 00-.209.531l.063.215v.004c.042.262.113.486.247.68.021.609.313 1.287.649 1.625.116-.207.295-.924.309-1.559.338-.754.125-1.732-.872-1.596z"
			/>
			<path fill={clawColour} d="M11.051 244.004c1.088-.816.613-2.83.959-3.84h-1.68c.26 1.262.711 2.33.721 3.84z" />
			<path
				fill="#ffdbf6"
				d="M48.491 186.885c-6.23-2.148-12.402-.785-18.96.959-6.809 1.813-12.667 6.143-16.56 10.561-.486.552-1.208.888-1.681 1.439-2.68 3.141-5.546 7.711-6.239 12.238-.643 4.188 1.417 7.348 1.439 11.279.011 1.922-.569 3.816-.48 5.521.13 2.474 1.561 2.853 2.641 5.038 2.305.873 4.549.729 5.04-1.438.419-1.851-1.485-5.308-.96-7.92.096-.479.248-.912.459-1.307.47-.21.954-.396 1.451-.521.688.17 1.381.369 1.999.545.491.65.954 1.359 1.129 2.244.121.605-.244 1.33-.239 1.92.022 3.125 1.613 5.703 2.88 7.92 2.01.912 3.596 1.005 4.801-.239.224-.231 1.182-1.156 1.199-1.201 1.112-2.709-.868-7.737.177-10.56.182-.028.34-.049.451-.063 1.503-.186 3.114-.012 4.413.784 1.304 4.767.409 10.078 3.601 12.959.834-.287 1.729-.513 2.399-.961 1.456-3.508.027-6.919-.013-10.929 1.078-.342 2.274-.743 3.365-.62.617.278 1.198.649 1.833.918.025.011.05.011.076.019.282.654.704 1.234.979 1.973.413 1.107.381 2.252.72 3.359.277.905.902 1.784 1.2 2.641.362 1.043.288 2.271 1.2 2.879 2.14-.473 1.283-2.717 1.199-4.559-.104-2.32-.136-4.933.147-6.865.994-.303 1.992-.653 2.985-.686.495.125 1.082.137 1.669.59 2.059 3.032 2.017 6.772 3.119 10.561 1.41-.16 1.79-1.035 1.948-2.104a.61.61 0 00.343-.51c.226-2.064.5-4.148.46-6.221.591-3.928.608-9.045.85-12.285.308-4.129.046-8.375-.479-11.76-1.063-6.833-4.799-13.612-10.561-15.598z"
			/>
			<path
				fill="#ffdbf6"
				d="M183.711 199.844c-.473-.553-1.195-.889-1.682-1.439-3.893-4.418-9.75-8.748-16.559-10.561-6.56-1.744-12.73-3.107-18.962-.959-5.762 1.986-9.497 8.766-10.562 15.6-.524 3.386-.786 7.632-.479 11.761.241 3.239.26 8.356.85 12.284-.039 2.072.234 4.156.461 6.222a.61.61 0 00.343.511c.157 1.066.538 1.941 1.946 2.104 1.104-3.788 1.062-7.528 3.119-10.561.588-.455 1.174-.466 1.67-.591.992.031 1.99.384 2.984.685.283 1.935.252 4.545.146 6.867-.084 1.842-.94 4.086 1.199 4.559.912-.608.838-1.836 1.201-2.879.297-.856.922-1.735 1.198-2.641.341-1.107.308-2.252.722-3.359.273-.738.694-1.318.979-1.975.025-.007.05-.007.074-.018.636-.27 1.217-.641 1.834-.918 1.092-.123 2.287.279 3.365.619-.039 4.011-1.47 7.422-.014 10.93.671.447 1.564.674 2.398.961 3.191-2.881 2.298-8.193 3.601-12.959 1.3-.796 2.91-.969 4.413-.783.109.014.27.033.45.063 1.046 2.82-.935 7.85.178 10.559.019.045.976.971 1.199 1.201 1.205 1.244 2.791 1.15 4.801.238 1.269-2.217 2.856-4.795 2.881-7.92.005-.59-.36-1.313-.239-1.92.176-.885.639-1.594 1.129-2.244a65.861 65.861 0 012-.545c.498.127.979.313 1.451.522.211.394.362.827.459 1.306.524 2.613-1.379 6.07-.959 7.92.489 2.166 2.733 2.313 5.039 1.438 1.079-2.187 2.512-2.565 2.641-5.038.09-1.705-.49-3.6-.479-5.521.022-3.932 2.082-7.092 1.438-11.278-.688-4.53-3.554-9.101-6.234-12.241z"
			/>
			<path
				fill="#000"
				d="M61.78 194.486c-.824-.719-1.263-1.95-1.65-2.9a11.905 11.905 0 00-.736-1.488 22.16 22.16 0 01-.832-1.285c-.056-.078-.118-.154-.175-.231-3.74-4.077-8.441-6.944-15.174-7.938-1.816-.267-4.291-.438-6-.24-3.104.365-5.922 1.848-8.881 2.643-1.869.502-3.463.57-5.04 1.199-4.38 1.75-7.939 4.773-11.521 7.199-2.664 3.219-5.489 5.918-7.68 9.359-2.178 3.422-4.254 7.459-4.08 12 .061 1.565.592 3.17.961 4.801.324 1.436.937 3.301.959 4.799.033 2.18-1.065 4.609-.719 6.961.195 1.34 1.259 2.623 1.92 3.842.709 1.309 1.203 2.592 2.159 3.602.002.077.014.158.021.238.022.258.059.521.118.79.071.326.163.659.271 1 .454 1.44 1.167 3.011 1.512 4.69.126.619.213 1.244.292 1.867.322.582.559 1.271.753 1.949.153.256.302.504.438.721.729 1.168 1.423 2.375 2.004 3.629.353.303.759.549 1.313.473 2.386-1.725 3.483-6.09 3.84-9.84.114-1.186-.379-2.75.587-3.489.047-.036.08-.079.134-.11a1.3 1.3 0 01.527.11c.963.419 1.116 1.994 1.394 3.007.384 1.405.681 2.842.902 4.293l.048.092c.216.336.373.684.495 1.037.219.493.436.989.687 1.479.548 1.069.905 2.296 1.487 3.362.617.071 1.157-.113 1.633-.469.167-.438.356-.849.503-1.189.632-1.461 1.266-2.901 2.148-4.202.083-.657.397-1.287.753-1.89.556-2.441.802-4.781 2.622-5.393 1.42 1.916 1.796 4.611 2.16 6.723.176 1.015.625 1.783.721 2.64.006.053.005.108.007.163.186.469.335.955.496 1.414.515 1.471 1.405 2.738 1.997 4.168.451-.021.908-.186 1.332-.455.404-.965 1.096-1.789 1.652-2.723.265-.445.522-.892.777-1.334.356-1.098.675-2.299.938-3.395.605-2.52.261-5.67 2.16-6.959 1.057.947 1.703 2.533 2.16 4.08.468 1.588 1.181 3.459 1.44 5.039v.008c1.147 2.343 2.114 4.768 3.368 7.049.274.129.581.201.951.145.808-.916 1.353-2.096 1.749-3.422.005-.021.012-.039.017-.058 1.022-3.47 1.019-7.965 1.835-11.642.914 1.865 1.099 4.886 1.571 7.539.474 1.16 1.121 2.229 1.663 3.381.169.359.344.714.521 1.064.142.225.282.449.432.668.326.149.695.237 1.107.264.886-2.062 2.731-4.066 3.413-5.854.014-.035.042-.053.059-.083.634-2.932.795-5.95-.054-8.55a9.636 9.636 0 00-.312-.831c.013-.056.031-.112.045-.169.064-.26.141-.525.214-.79.837-3.002 2.244-6.269 2.622-9.84.213-2.019-.119-4.463 0-6.722.114-2.155.657-4.219.72-6.239a54.627 54.627 0 00-.479-8.88c-.55-3.886-1.377-7.909-3.275-10.877zm-50.729 49.518c-.01-1.51-.461-2.578-.721-3.84h1.68c-.346 1.01.129 3.024-.959 3.84zm12.699-3.121c.025.262-.097.489-.211.717-.002.03-.022.047-.03.074.001.02.006.04.007.061.002.041-.011.072-.017.107h.031c-.186.537-.504.939-.479 1.684-.333-.34-.381-.963-.464-1.557a.496.496 0 01-.071-.234c-.009-.192-.046-.381-.077-.57a.98.98 0 01-.015-.482c.013-.054.039-.092.063-.132.051-.219.219-.411.466-.394.114.014.229.02.344.017.39.047.55.43.453.709zm12.781 1.18c-.007.33 0 .645-.096.961-.012.039-.035.065-.052.099-.005.035-.003.069-.01.104-.095.475-.877.484-.964 0-.012-.067-.017-.141-.027-.211-.007-.031-.021-.058-.022-.094-.02-.557-.784-2.303.34-2.384.277-.021.545.17.685.418a.434.434 0 01.16.255c.062.307-.007.551-.014.852zm11.96 4.582c-.537-1.043-.578-3.383-.96-3.84.261-.24 1.178-1.031 1.44-.479.368 1.084-.209 3.094-.48 4.319zm10.389-4.438c-.014.635-.193 1.352-.309 1.559-.336-.338-.628-1.016-.649-1.625-.134-.193-.205-.418-.247-.68v-.004l-.063-.215a.464.464 0 01.209-.531.378.378 0 01.187-.1c.997-.136 1.21.842.872 1.596zm.651-27.963c-.242 3.24-.259 8.357-.85 12.285.04 2.07-.234 4.154-.46 6.221a.61.61 0 01-.343.51c-.158 1.067-.538 1.942-1.948 2.104-1.102-3.787-1.06-7.527-3.119-10.561-.587-.453-1.174-.465-1.669-.59-.993.031-1.991.383-2.985.686-.283 1.934-.251 4.545-.147 6.865.084 1.842.941 4.086-1.199 4.559-.912-.607-.838-1.836-1.2-2.879-.298-.855-.923-1.734-1.2-2.641-.339-1.107-.307-2.252-.72-3.359-.275-.737-.696-1.317-.979-1.973-.025-.008-.05-.008-.076-.019-.635-.269-1.216-.64-1.833-.918-1.091-.123-2.287.278-3.365.62.04 4.01 1.469 7.421.013 10.929-.67.448-1.565.674-2.399.961-3.192-2.881-2.297-8.192-3.601-12.959-1.299-.796-2.909-.969-4.413-.784-.11.014-.269.034-.451.063-1.045 2.822.935 7.851-.177 10.56-.017.046-.975.97-1.199 1.201-1.205 1.244-2.791 1.151-4.801.239-1.267-2.217-2.858-4.795-2.88-7.92-.005-.59.36-1.313.239-1.92-.175-.885-.639-1.594-1.129-2.244-.618-.176-1.312-.375-1.999-.545a9.063 9.063 0 00-1.451.521 4.672 4.672 0 00-.459 1.307c-.525 2.612 1.379 6.069.96 7.92-.491 2.166-2.735 2.312-5.04 1.438-1.08-2.188-2.511-2.564-2.641-5.038-.089-1.704.491-3.6.48-5.521-.022-3.932-2.082-7.092-1.439-11.279.693-4.527 3.559-9.098 6.239-12.238.473-.553 1.195-.889 1.681-1.439 3.893-4.418 9.751-8.747 16.56-10.561 6.558-1.744 12.73-3.107 18.96-.959 5.762 1.986 9.498 8.766 10.561 15.6.525 3.383.787 7.629.479 11.758z"
			/>
			<path
				fill="#000"
				d="M194.988 212.803c.176-4.541-1.9-8.578-4.078-12-2.191-3.441-5.016-6.142-7.68-9.359-3.582-2.426-7.143-5.449-11.521-7.199-1.577-.629-3.171-.697-5.04-1.199-2.959-.795-5.776-2.275-8.881-2.643-1.709-.197-4.185-.025-6 .24-6.733.992-11.435 3.86-15.175 7.938-.057.077-.119.153-.174.231-.262.438-.541.865-.832 1.285-.271.469-.521.959-.736 1.488-.389.95-.826 2.184-1.65 2.9-1.896 2.968-2.725 6.99-3.271 10.877a54.62 54.62 0 00-.479 8.88c.063 2.021.605 4.084.721 6.239.119 2.259-.215 4.703 0 6.722.377 3.571 1.783 6.838 2.621 9.84.074.265.15.53.215.79.014.057.031.113.045.169-.117.271-.221.55-.313.831-.849 2.6-.688 5.618-.054 8.55.018.03.046.048.061.083.682 1.787 2.525 3.793 3.412 5.854.411-.025.78-.113 1.106-.264.149-.219.289-.443.432-.668.179-.352.353-.705.521-1.064.543-1.151 1.189-2.221 1.664-3.381.472-2.653.656-5.674 1.57-7.539.815 3.677.813 8.172 1.834 11.642l.019.058c.396 1.326.94 2.506 1.747 3.422.371.058.679-.016.951-.145 1.254-2.281 2.222-4.706 3.369-7.049v-.008c.258-1.58.971-3.451 1.439-5.039.457-1.547 1.104-3.133 2.16-4.08 1.898 1.289 1.555 4.439 2.16 6.959.262 1.096.58 2.297.938 3.395.256.442.512.889.777 1.334.555.934 1.246 1.758 1.65 2.724.426.271.881.434 1.332.454.592-1.43 1.482-2.697 1.998-4.168.159-.459.311-.945.495-1.414.003-.055.003-.11.009-.163.096-.854.545-1.625.721-2.64.363-2.11.74-4.807 2.16-6.723 1.819.611 2.064 2.95 2.621 5.393.354.603.67 1.231.754 1.89.881 1.301 1.516 2.741 2.147 4.202.146.341.336.753.502 1.189.478.354 1.019.541 1.634.469.584-1.066.938-2.293 1.487-3.362.251-.489.47-.985.688-1.479.121-.354.277-.701.494-1.037.016-.029.031-.061.049-.092.221-1.451.518-2.888.9-4.293.278-1.013.432-2.588 1.395-3.007.154-.067.326-.11.527-.11.053.031.086.074.133.11.967.739.474 2.306.588 3.489.355 3.75 1.453 8.115 3.84 9.84.554.076.959-.17 1.313-.473.581-1.254 1.274-2.461 2.004-3.629.137-.217.284-.465.438-.721.192-.679.431-1.367.753-1.949.079-.623.165-1.248.292-1.867.347-1.682 1.058-3.25 1.513-4.69.106-.341.198-.674.27-1 .06-.271.097-.532.119-.79.006-.08.019-.161.021-.238.956-1.01 1.45-2.293 2.159-3.602.66-1.219 1.725-2.502 1.92-3.842.346-2.352-.752-4.781-.719-6.961.021-1.498.635-3.363.959-4.799.366-1.631.898-3.236.956-4.801zm-57.599 28.439c-.02.07-.041.145-.063.215v.004c-.042.262-.112.486-.246.68-.021.609-.313 1.287-.65 1.625-.115-.207-.295-.924-.309-1.559-.338-.754-.125-1.732.872-1.596.067.01.13.05.187.1a.462.462 0 01.209.531zm9.121 5.403c-.271-1.225-.848-3.233-.48-4.317.264-.554 1.181.237 1.441.479-.383.455-.424 2.795-.961 3.838zm13.133-3.723c-.002.036-.017.063-.022.094-.011.07-.015.144-.027.211-.086.484-.868.475-.963 0-.008-.035-.006-.07-.011-.104-.018-.032-.04-.06-.053-.099-.096-.316-.09-.631-.096-.961-.008-.301-.076-.545-.014-.852a.423.423 0 01.159-.255c.14-.248.407-.438.685-.418 1.125.081.361 1.827.342 2.384zm12.92-1.759c-.03.19-.067.378-.076.571a.5.5 0 01-.071.232c-.082.594-.131 1.219-.464 1.559.023-.744-.294-1.146-.479-1.685h.03c-.006-.036-.019-.065-.017-.106 0-.021.005-.041.007-.062-.009-.026-.027-.044-.029-.073-.114-.229-.235-.455-.211-.718a.542.542 0 01.452-.711c.113.003.229-.003.344-.017.247-.02.415.175.467.394.022.04.049.078.063.132.04.171.021.329-.016.484zm11.387 2.841c-1.089-.816-.613-2.83-.959-3.84h1.68c-.26 1.262-.711 2.33-.721 3.84zm4.562-20.643c-.012 1.922.568 3.816.479 5.521-.13 2.474-1.562 2.853-2.642 5.038-2.306.873-4.55.729-5.039-1.438-.42-1.851 1.483-5.308.959-7.92a4.747 4.747 0 00-.459-1.307 8.94 8.94 0 00-1.451-.521c-.688.17-1.381.369-2 .545-.49.65-.953 1.359-1.129 2.244-.121.605.244 1.33.24 1.92-.023 3.125-1.613 5.703-2.882 7.92-2.01.912-3.596 1.005-4.801-.239-.226-.231-1.183-1.156-1.199-1.201-1.11-2.709.868-7.737-.178-10.56a18.798 18.798 0 00-.45-.063c-1.503-.186-3.113-.012-4.413.784-1.303 4.767-.407 10.078-3.6 12.959-.835-.287-1.729-.513-2.399-.961-1.455-3.509-.025-6.919.014-10.929-1.078-.342-2.273-.743-3.365-.62-.617.278-1.198.649-1.834.918-.024.011-.049.011-.074.019-.283.654-.704 1.234-.979 1.973-.414 1.107-.381 2.252-.722 3.359-.276.905-.901 1.784-1.198 2.641-.363 1.043-.289 2.271-1.201 2.879-2.141-.473-1.283-2.717-1.198-4.559.104-2.32.136-4.933-.147-6.865-.994-.303-1.992-.653-2.984-.686-.496.125-1.082.137-1.67.59-2.059 3.032-2.017 6.771-3.119 10.561-1.408-.16-1.788-1.035-1.946-2.104a.614.614 0 01-.343-.51c-.227-2.064-.499-4.148-.461-6.221-.59-3.928-.607-9.045-.85-12.285-.309-4.129-.047-8.375.479-11.76 1.063-6.834 4.799-13.613 10.562-15.601 6.229-2.147 12.401-.784 18.961.959 6.809 1.813 12.666 6.144 16.559 10.562.486.551 1.209.887 1.682 1.438 2.68 3.142 5.546 7.712 6.239 12.238.64 4.191-1.42 7.351-1.441 11.282z"
			/>
		</g>
	);
};

interface IPropTypes {
	colour: string | null;
}

export default Claws;