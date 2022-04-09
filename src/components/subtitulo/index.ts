export function init() {
	class SubtitleComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const originalText = this.textContent;
			const shadow = this.attachShadow({ mode: "open" });

			let style = document.createElement("style");
			style.textContent = `
            .subtitle {
                font-family: "Poppins", sans-serif;
                font-size: 38px;
                font-weight: Bold;
                color: #000;
            }
            `;
			shadow.appendChild(style);

			const subtitle = document.createElement("p");
			subtitle.classList.add("subtitle");
			subtitle.textContent = `${originalText}`;
			shadow.appendChild(subtitle);
		}
	}
	customElements.define("subtitle-element", SubtitleComponent);
}
