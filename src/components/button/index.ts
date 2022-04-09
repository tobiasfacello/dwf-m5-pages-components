export function init() {
	class ButtonComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalValue = this.getAttribute("value");

			let style = document.createElement("style");
			style.textContent = `
			
            .filled-button {
				height: 55px;
                min-width: 240px;
                padding: 0;
                font-family: "Poppins", sans-serif;
                font-size: 22px;
                color: #111;
                border: 2px solid #000;
                border-radius: 4px;
                background-color: rgba(156, 187, 233, 1);
            }

			@media (min-width: 960px) {
				.filled-button {
					width: 370px;
				}
			}

            .filled-button:active {
                background-color: rgb(121,166,234);
            }
            `;
			shadow.appendChild(style);

			const filledButton = document.createElement("input");
			filledButton.setAttribute("type", "submit");
			filledButton.setAttribute("value", `${originalValue}`);
			filledButton.classList.add("filled-button");

			shadow.appendChild(filledButton);
		}
	}
	customElements.define("filled-button", ButtonComponent);
}
