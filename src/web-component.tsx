import r2wc from "@r2wc/react-to-web-component"
import App from "./App"

const UrbreathFooter = r2wc(App)

customElements.define("urbreath-footer", UrbreathFooter)