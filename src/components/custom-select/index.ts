export function init() {
	class SelectComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalLabel = this.getAttribute("label");

			let style = document.createElement("style");
			style.textContent = `
			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			.select-label {
				font-family: "Poppins", sans-serif;
				font-size: 18px;
				color: #111;
			}

            .select {
                width: 240px;
                height: 55px;
				padding: 0;
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                color: #111;
                border: 2px solid #000;
                border-radius: 4px;
            }

			.select option {
				text-align: center;
			}


			@media (min-width: 960px) {
				.select {
					width: 370px;
				}
			}
            `;
			shadow.appendChild(style);

			const container = document.createElement("div");
			container.classList.add("container");

			const select = document.createElement("select");
			select.classList.add("select");
			select.innerHTML = `
            <option value="piedra"selected>Piedra</option>
            <option value="papel">Papel</option>
            <option value="tijera">Tijera</option>
            `;

			const fieldLabel = document.createElement("label");
			fieldLabel.classList.add("select-label");
			if (select.getAttribute("label") !== "") {
				fieldLabel.textContent = `${originalLabel}`;
			}

			container.appendChild(fieldLabel);
			container.appendChild(select);

			shadow.appendChild(container);
		}
	}
	customElements.define("select-element", SelectComponent);
}
