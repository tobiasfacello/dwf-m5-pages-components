export function init() {
	class TitleComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const originalText = this.textContent;
			const shadow = this.attachShadow({ mode: "open" });

			let style = document.createElement("style");
			style.textContent = `
            .title {
				margin: 25px 0;
                font-family: "Poppins", sans-serif;
                font-size: 42px;
                font-weight: 700;
				text-align: center;
                color: #000;
            }

			@media (min-width: 960px) {
				.title {
					font-size: 52px;
				}
			}
            `;
			shadow.appendChild(style);

			const title = document.createElement("p");
			title.classList.add("title");
			title.textContent = `${originalText}`;
			shadow.appendChild(title);
		}
	}
	customElements.define("title-element", TitleComponent);
}
