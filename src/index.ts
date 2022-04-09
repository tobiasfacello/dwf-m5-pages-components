import { initRouter } from "./router";

import { init as initHeaderComponent } from "./components/header";
import { init as initFooterComponent } from "./components/footer";
import { init as initTitleComponent } from "./components/titulo";
import { init as initSubTitleComponent } from "./components/subtitulo";
import { init as initLargeTextComponent } from "./components/large-text";
import { init as initBodyTextComponent } from "./components/body-text";
import { init as initTextfieldComponent } from "./components/textfield";
import { init as initSelectComponent } from "./components/custom-select";
import { init as initOutlinedComponent } from "./components/outlined";
import { init as initButtonComponent } from "./components/button";

function main() {
	const root = document.querySelector(".root");
	initRouter(root);

	initHeaderComponent();
	initFooterComponent();
	initTitleComponent();
	initSubTitleComponent();
	initLargeTextComponent();
	initBodyTextComponent();
	initTextfieldComponent();
	initSelectComponent();
	initOutlinedComponent();
	initButtonComponent();
}

main();
