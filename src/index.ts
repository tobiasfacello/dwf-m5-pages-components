import { initRouter } from "../src/router";

import { init as initHeaderComponent } from "../src/components/header";
import { init as initFooterComponent } from "../src/components/footer";
import { init as initTitleComponent } from "../src/components/titulo";
import { init as initSubTitleComponent } from "../src/components/subtitulo";
import { init as initLargeTextComponent } from "../src/components/large-text";
import { init as initBodyTextComponent } from "../src/components/body-text";
import { init as initTextfieldComponent } from "../src/components/textfield";
import { init as initSelectComponent } from "../src/components/custom-select";
import { init as initOutlinedComponent } from "../src/components/outlined";
import { init as initButtonComponent } from "../src/components/button";

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
