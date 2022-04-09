export function init() {
	class OutlinedComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalValue = this.getAttribute("value");

			let style = document.createElement("style");
			style.textContent = `
			
            .outlined-button {
				min-width: 240px;
                height: 55px;
                padding: 0;
				margin-top: 80px;
                font-family: "Poppins", sans-serif;
                font-size: 22px;
                color: #111;
                border: 2px solid #000;
                border-radius: 4px;
                background-color: rgba(0, 0, 0, 0)
            }

			@media (min-width: 960px) {
				.outlined-button {
					width: 370px;
				}
			}

            .outlined-button:active {
                background-color: rgba(0, 0, 0, 0.2);
            }
            `;
			shadow.appendChild(style);

			const outlined = document.createElement("input");
			outlined.setAttribute("type", "submit");
			outlined.setAttribute("value", `${originalValue}`);
			outlined.classList.add("outlined-button");

			shadow.appendChild(outlined);
		}
	}
	customElements.define("outlined-button", OutlinedComponent);
}
