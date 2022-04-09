export function init() {
	class FooterComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalText = this.textContent;

			let style = document.createElement("style");
			style.textContent = `
			
            .footer {
                width: 100%;
                padding: 105px 0;
                font-family: "Poppins", sans-serif;
				font-size: 22px;
				text-align: center;
                background-color: #FFA0EA;
            }
            `;
			shadow.appendChild(style);

			const footer = document.createElement("footer");
			footer.textContent = `${originalText}`;
			footer.classList.add("footer");

			shadow.appendChild(footer);
		}
	}
	customElements.define("footer-element", FooterComponent);
}
