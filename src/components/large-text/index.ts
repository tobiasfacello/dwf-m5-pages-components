export function init() {
	class LargeTextComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const originalText = this.textContent;
			const shadow = this.attachShadow({ mode: "open" });

			let style = document.createElement("style");
			style.textContent = `
            .large-text {
                font-family: "Poppins", sans-serif;
                font-size: 22px;
                font-weight: 500;
				text-align: center;
                color: #000;
            }
            `;
			shadow.appendChild(style);

			const largeText = document.createElement("p");
			largeText.classList.add("large-text");
			largeText.textContent = `${originalText}`;
			shadow.appendChild(largeText);
		}
	}
	customElements.define("large-text", LargeTextComponent);
}
