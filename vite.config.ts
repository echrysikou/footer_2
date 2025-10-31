import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), typescript()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {}
  },
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: resolve(__dirname, 'src/web-component.tsx'),
      name: 'urbreath-footer',
      fileName: (format) => `urbreath-footer.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {
        },
      },
    },
  },
});
