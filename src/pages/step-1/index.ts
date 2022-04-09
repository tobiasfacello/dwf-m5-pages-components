export function initStepOnePage(params) {
	const div = document.createElement("div");
	div.innerHTML = `
	<title-element>Necesitamos algunos datos más</title-element>
	
	<div class="inputs">

	<div class="input-container">
	<textfield-element placeholder="" label="Email"></textfield-element>
	</div>

	<div class="input-container">
	<textfield-element placeholder="" label="Comida favorita"></textfield-element>
	</div>

	<div class="input-container">
	<select-element label="Alguna de estas tres opciones"></select-element>
	</div>

	<filled-button class="buttonGoTo__thankyou" value="Continuar"></filled-button>

	<outlined-button value="Volver"></outlined-button>

	</div>
	`;

	const buttonThankYou = div.querySelector(".buttonGoTo__thankyou");
	buttonThankYou.addEventListener("click", () => {
		params.goTo("/thankyou");
	});
	return div;
}
