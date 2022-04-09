export function init() {
	class TextfieldComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalPlaceholder = this.getAttribute("placeholder");
			const originalLabel = this.getAttribute("label");

			let style = document.createElement("style");
			style.textContent = `
			.container {
				display: flex;
				flex-direction: column;
			}

			.textfield-label {
				font-family: "Poppins", sans-serif;
				font-size: 18px;
				color: #111;
			}

            .textfield {
                width: 240px;
                height: 55px;
				padding: 0;
                font-family: "Poppins", sans-serif;
                font-size: 18px;
				text-align: center;
                color: #111;
                border: 2px solid #000;
                border-radius: 4px;
            }

			.textfield::placeholder {
				text-align: center;
			}

			@media (min-width: 960px) {
				.textfield {
					width: 370px;
				}
			}
            `;
			shadow.appendChild(style);

			const container = document.createElement("div");
			container.classList.add("container");

			const textfield = document.createElement("input");
			textfield.classList.add("textfield");
			textfield.setAttribute("type", "text");
			if (textfield.getAttribute("placeholder") !== "") {
				textfield.setAttribute("placeholder", `${originalPlaceholder}`);
			}

			const fieldLabel = document.createElement("label");
			fieldLabel.classList.add("textfield-label");
			if (textfield.getAttribute("label") !== "") {
				fieldLabel.textContent = `${originalLabel}`;
			}

			container.appendChild(fieldLabel);
			container.appendChild(textfield);

			shadow.appendChild(container);
		}
	}
	customElements.define("textfield-element", TextfieldComponent);
}
