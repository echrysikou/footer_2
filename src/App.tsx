import Footer from "./components/Footer";
import CustomTheme from "./themes";
import { useEffect, useRef } from "react";
import { injectFonts } from "./utils/fonts/injectFonts";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootNode = ref.current?.getRootNode();
    if (rootNode instanceof ShadowRoot) {
      injectFonts(rootNode);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{ fontFamily: "Rubik, Open Sans, sans-serif", fontWeight: 500 }}
    >
      <CustomTheme>
        <Footer />
      </CustomTheme>
    </div>
  );
}

export default App;
