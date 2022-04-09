export function initThankYouPage(params) {
	const div = document.createElement("div");
	div.innerHTML = `
	<title-element>Gracias!</title-element>

	<div class="large-text-container">
	<large-text>
	Toda la información que nos brindaste es muy importante
	</large-text>
	</div>

	<div class="inputs">
	<filled-button class="buttonGoTo__root" value="De nada"></filled-button>
	</div>
	`;

	const buttonRoot = div.querySelector(".buttonGoTo__root");
	buttonRoot.addEventListener("click", () => {
		params.goTo("/welcome");
	});

	return div;
}
