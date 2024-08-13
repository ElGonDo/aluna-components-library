// Incluye los tipos de vite-plugin-svgr para manejar SVG como componentes React
/// <reference types="vite-plugin-svgr/client" />

// Declaración para imágenes PNG
declare module "*.png" {
  const value: string;
  export default value;
}

// Declaración para imágenes JPG
declare module "*.jpg" {
  const value: string;
  export default value;
}

// Declaración para archivos SVG importados como componentes React
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
