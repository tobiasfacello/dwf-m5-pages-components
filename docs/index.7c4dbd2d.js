const t=[{path:/^\/w./,component:function(t){const e=document.createElement("div");return e.innerHTML='\n\t<title-element>Te damos la bienvenida a esta página</title-element>\n\n\t<section class="first-section">\n\t\t<body-text>\n\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia\n\t\t\taccusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae\n\t\t\tlaboriosam a aut consequatur quidem?\n\t\t</body-text>\n\t</section>\n\n\t<div class="large-text-container">\n\t\t<large-text>\n\t\tPara continuar ingresá tu nombre\n\t\t</large-text>\n\t</div>\n\n\t<section class="inputs">\n\t\t<div class="input-container">\n\t\t\t<textfield-element label="Nombre" placeholder="Ingresá tu nombre"></textfield-element>\n\t\t</div>\n\n\t\t<div class="input-container">\n\t\t\t<filled-button class="buttonGoTo__step-one" value="Comenzar"></filled-button>\n\t\t</div>\n\t</section>\n    ',e.querySelector(".buttonGoTo__step-one").addEventListener("click",(()=>{t.goTo("/step-1")})),e}},{path:/^\/s./,component:function(t){const e=document.createElement("div");return e.innerHTML='\n\t<title-element>Necesitamos algunos datos más</title-element>\n\t\n\t<div class="inputs">\n\n\t<div class="input-container">\n\t<textfield-element placeholder="" label="Email"></textfield-element>\n\t</div>\n\n\t<div class="input-container">\n\t<textfield-element placeholder="" label="Comida favorita"></textfield-element>\n\t</div>\n\n\t<div class="input-container">\n\t<select-element label="Alguna de estas tres opciones"></select-element>\n\t</div>\n\n\t<filled-button class="buttonGoTo__thankyou" value="Continuar"></filled-button>\n\n\t<outlined-button value="Volver"></outlined-button>\n\n\t</div>\n\t',e.querySelector(".buttonGoTo__thankyou").addEventListener("click",(()=>{t.goTo("/thankyou")})),e}},{path:/^\/t./,component:function(t){const e=document.createElement("div");return e.innerHTML='\n\t<title-element>Gracias!</title-element>\n\n\t<div class="large-text-container">\n\t<large-text>\n\tToda la información que nos brindaste es muy importante\n\t</large-text>\n\t</div>\n\n\t<div class="inputs">\n\t<filled-button class="buttonGoTo__root" value="De nada"></filled-button>\n\t</div>\n\t',e.querySelector(".buttonGoTo__root").addEventListener("click",(()=>{t.goTo("/welcome")})),e}}];!function(e){function n(t){history.pushState({},"",t),o(t)}function o(o){console.log("Ruta recibida por el handleRoute",o);for(const i of t)if(i.path.test(o)){const t=i.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/"==location.pathname&&window.addEventListener("load",(()=>{n("/welcome")})),o(location.pathname)}(document.querySelector(".root")),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.textContent;let n=document.createElement("style");n.textContent='\n            .header {\n\t\t\t\theight: 30px;\n                width: 100%;\n\t\t\t\tpadding: 15px 0;\n\t\t\t\tfont-family: "Poppins", sans-serif;\n\t\t\t\tfont-size: 22px;\n\t\t\t\ttext-align: center;\n                background-color: #FF8282;\n            }\n        \t',t.appendChild(n);const o=document.createElement("header");o.classList.add("header"),o.textContent=`${e}`,t.appendChild(o)}}customElements.define("header-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.textContent;let n=document.createElement("style");n.textContent='\n\t\t\t\n            .footer {\n                width: 100%;\n                padding: 105px 0;\n                font-family: "Poppins", sans-serif;\n\t\t\t\tfont-size: 22px;\n\t\t\t\ttext-align: center;\n                background-color: #FFA0EA;\n            }\n            ',t.appendChild(n);const o=document.createElement("footer");o.textContent=`${e}`,o.classList.add("footer"),t.appendChild(o)}}customElements.define("footer-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.textContent,e=this.attachShadow({mode:"open"});let n=document.createElement("style");n.textContent='\n            .title {\n\t\t\t\tmargin: 25px 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 42px;\n                font-weight: 700;\n\t\t\t\ttext-align: center;\n                color: #000;\n            }\n\n\t\t\t@media (min-width: 960px) {\n\t\t\t\t.title {\n\t\t\t\t\tfont-size: 52px;\n\t\t\t\t}\n\t\t\t}\n            ',e.appendChild(n);const o=document.createElement("p");o.classList.add("title"),o.textContent=`${t}`,e.appendChild(o)}}customElements.define("title-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.textContent,e=this.attachShadow({mode:"open"});let n=document.createElement("style");n.textContent='\n            .subtitle {\n                font-family: "Poppins", sans-serif;\n                font-size: 38px;\n                font-weight: Bold;\n                color: #000;\n            }\n            ',e.appendChild(n);const o=document.createElement("p");o.classList.add("subtitle"),o.textContent=`${t}`,e.appendChild(o)}}customElements.define("subtitle-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.textContent,e=this.attachShadow({mode:"open"});let n=document.createElement("style");n.textContent='\n            .large-text {\n                font-family: "Poppins", sans-serif;\n                font-size: 22px;\n                font-weight: 500;\n\t\t\t\ttext-align: center;\n                color: #000;\n            }\n            ',e.appendChild(n);const o=document.createElement("p");o.classList.add("large-text"),o.textContent=`${t}`,e.appendChild(o)}}customElements.define("large-text",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.textContent,e=this.attachShadow({mode:"open"});let n=document.createElement("style");n.textContent='\n            .body-text {\n\t\t\t\tmargin: 30px 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 18px;\n\t\t\t\ttext-align: center;\n                color: #000;\n            }\n            ',e.appendChild(n);const o=document.createElement("p");o.classList.add("body-text"),o.textContent=`${t}`,e.appendChild(o)}}customElements.define("body-text",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.getAttribute("placeholder"),n=this.getAttribute("label");let o=document.createElement("style");o.textContent='\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\n\t\t\t.textfield-label {\n\t\t\t\tfont-family: "Poppins", sans-serif;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\n            .textfield {\n                width: 240px;\n                height: 55px;\n\t\t\t\tpadding: 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 18px;\n\t\t\t\ttext-align: center;\n                color: #111;\n                border: 2px solid #000;\n                border-radius: 4px;\n            }\n\n\t\t\t.textfield::placeholder {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t@media (min-width: 960px) {\n\t\t\t\t.textfield {\n\t\t\t\t\twidth: 370px;\n\t\t\t\t}\n\t\t\t}\n            ',t.appendChild(o);const i=document.createElement("div");i.classList.add("container");const l=document.createElement("input");l.classList.add("textfield"),l.setAttribute("type","text"),""!==l.getAttribute("placeholder")&&l.setAttribute("placeholder",`${e}`);const s=document.createElement("label");s.classList.add("textfield-label"),""!==l.getAttribute("label")&&(s.textContent=`${n}`),i.appendChild(s),i.appendChild(l),t.appendChild(i)}}customElements.define("textfield-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.getAttribute("label");let n=document.createElement("style");n.textContent='\n\t\t\t.container {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.select-label {\n\t\t\t\tfont-family: "Poppins", sans-serif;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\n            .select {\n                width: 240px;\n                height: 55px;\n\t\t\t\tpadding: 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 18px;\n                color: #111;\n                border: 2px solid #000;\n                border-radius: 4px;\n            }\n\n\t\t\t.select option {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\n\t\t\t@media (min-width: 960px) {\n\t\t\t\t.select {\n\t\t\t\t\twidth: 370px;\n\t\t\t\t}\n\t\t\t}\n            ',t.appendChild(n);const o=document.createElement("div");o.classList.add("container");const i=document.createElement("select");i.classList.add("select"),i.innerHTML='\n            <option value="piedra"selected>Piedra</option>\n            <option value="papel">Papel</option>\n            <option value="tijera">Tijera</option>\n            ';const l=document.createElement("label");l.classList.add("select-label"),""!==i.getAttribute("label")&&(l.textContent=`${e}`),o.appendChild(l),o.appendChild(i),t.appendChild(o)}}customElements.define("select-element",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.getAttribute("value");let n=document.createElement("style");n.textContent='\n\t\t\t\n            .outlined-button {\n\t\t\t\tmin-width: 240px;\n                height: 55px;\n                padding: 0;\n\t\t\t\tmargin-top: 80px;\n                font-family: "Poppins", sans-serif;\n                font-size: 22px;\n                color: #111;\n                border: 2px solid #000;\n                border-radius: 4px;\n                background-color: rgba(0, 0, 0, 0)\n            }\n\n\t\t\t@media (min-width: 960px) {\n\t\t\t\t.outlined-button {\n\t\t\t\t\twidth: 370px;\n\t\t\t\t}\n\t\t\t}\n\n            .outlined-button:active {\n                background-color: rgba(0, 0, 0, 0.2);\n            }\n            ',t.appendChild(n);const o=document.createElement("input");o.setAttribute("type","submit"),o.setAttribute("value",`${e}`),o.classList.add("outlined-button"),t.appendChild(o)}}customElements.define("outlined-button",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){const t=this.attachShadow({mode:"open"}),e=this.getAttribute("value");let n=document.createElement("style");n.textContent='\n\t\t\t\n            .filled-button {\n\t\t\t\theight: 55px;\n                min-width: 240px;\n                padding: 0;\n                font-family: "Poppins", sans-serif;\n                font-size: 22px;\n                color: #111;\n                border: 2px solid #000;\n                border-radius: 4px;\n                background-color: rgba(156, 187, 233, 1);\n            }\n\n\t\t\t@media (min-width: 960px) {\n\t\t\t\t.filled-button {\n\t\t\t\t\twidth: 370px;\n\t\t\t\t}\n\t\t\t}\n\n            .filled-button:active {\n                background-color: rgb(121,166,234);\n            }\n            ',t.appendChild(n);const o=document.createElement("input");o.setAttribute("type","submit"),o.setAttribute("value",`${e}`),o.classList.add("filled-button"),t.appendChild(o)}}customElements.define("filled-button",t)}();
//# sourceMappingURL=index.7c4dbd2d.js.map