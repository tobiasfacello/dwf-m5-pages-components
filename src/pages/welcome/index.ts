export function initWelcomePage(params) {
	const div = document.createElement("div");
	div.innerHTML = `
	<title-element>Te damos la bienvenida a esta página</title-element>

	<section class="first-section">
		<body-text>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia
			accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae
			laboriosam a aut consequatur quidem?
		</body-text>
	</section>

	<div class="large-text-container">
		<large-text>
		Para continuar ingresá tu nombre
		</large-text>
	</div>

	<section class="inputs">
		<div class="input-container">
			<textfield-element label="Nombre" placeholder="Ingresá tu nombre"></textfield-element>
		</div>

		<div class="input-container">
			<filled-button class="buttonGoTo__step-one" value="Comenzar"></filled-button>
		</div>
	</section>
    `;

	const buttonStepOne = div.querySelector(".buttonGoTo__step-one");
	buttonStepOne.addEventListener("click", () => {
		params.goTo("/step-1");
	});

	return div;
}
