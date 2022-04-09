export function init() {
	class BodyTextComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const originalText = this.textContent;
			const shadow = this.attachShadow({ mode: "open" });

			let style = document.createElement("style");
			style.textContent = `
            .body-text {
				margin: 30px 0;
                font-family: "Poppins", sans-serif;
                font-size: 18px;
				text-align: center;
                color: #000;
            }
            `;
			shadow.appendChild(style);

			const bodyText = document.createElement("p");
			bodyText.classList.add("body-text");
			bodyText.textContent = `${originalText}`;
			shadow.appendChild(bodyText);
		}
	}
	customElements.define("body-text", BodyTextComponent);
}
