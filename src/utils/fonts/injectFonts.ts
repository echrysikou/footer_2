import rubik400 from "@fontsource/rubik/400.css?inline";
import rubik500 from "@fontsource/rubik/500.css?inline";
import rubik600 from "@fontsource/rubik/600.css?inline";
import openSans400 from "@fontsource/open-sans/400.css?inline";
import openSans500 from "@fontsource/open-sans/500.css?inline";
import openSans600 from "@fontsource/open-sans/600.css?inline";

export function injectFonts(shadowRoot: ShadowRoot) {
  const style = document.createElement("style");
  style.textContent = `
    ${rubik400}
    ${rubik500}
    ${rubik600}
    ${openSans400}
    ${openSans500}
    ${openSans600}
  `;
  shadowRoot.prepend(style);
}
