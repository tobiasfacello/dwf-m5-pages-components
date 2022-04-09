export function init() {
	class HeaderComponent extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const shadow = this.attachShadow({ mode: "open" });
			const originalText = this.textContent;

			let style = document.createElement("style");
			style.textContent = `
            .header {
				height: 30px;
                width: 100%;
				padding: 15px 0;
				font-family: "Poppins", sans-serif;
				font-size: 22px;
				text-align: center;
                background-color: #FF8282;
            }
        	`;
			shadow.appendChild(style);

			const header = document.createElement("header");
			header.classList.add("header");
			header.textContent = `${originalText}`;
			shadow.appendChild(header);
		}
	}
	customElements.define("header-element", HeaderComponent);
}
