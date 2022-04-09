import { initWelcomePage } from "./pages/welcome";
import { initStepOnePage } from "./pages/step-1";
import { initThankYouPage } from "./pages/thankyou";

const routes = [
	{
		path: /^\/w./,
		component: initWelcomePage,
	},
	{
		path: /^\/s./,
		component: initStepOnePage,
	},
	{
		path: /^\/t./,
		component: initThankYouPage,
	},
];

export function initRouter(container: Element) {
	function goTo(path) {
		history.pushState({}, "", path);
		handleRoute(path);
	}

	if (location.pathname == "/") {
		window.addEventListener("load", () => {
			goTo("/welcome");
		});
	}

	function handleRoute(route) {
		console.log("Ruta recibida por el handleRoute", route);

		for (const r of routes) {
			if (r.path.test(route)) {
				const el = r.component({ goTo: goTo });

				if (container.firstChild) {
					container.firstChild.remove();
				}

				container.appendChild(el);
			}
		}
	}

	handleRoute(location.pathname);
}
