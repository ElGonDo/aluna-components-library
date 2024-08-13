import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr"; // Importa el plugin

export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), svgr()], // Agrega el plugin aquí
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "aluna-library-components",
      fileName: "aluna-library-components",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          React: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
