import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import svgr from "@svgr/rollup";
import pkg from "./package.json";

export default {
  input: "src/lib.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ],
  plugins: [
    svgr(),
    resolve(),
    json(),
    image(),
    postcss({
      plugins: []
    }),
    babel({
      presets: ["react-app"],
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
    commonjs({
      include: "node_modules/**",
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        "node_modules/react/index.js": [
          "cloneElement",
          "createContext",
          "Component",
          "createElement",
          "forwardRef",
          "Fragment"
        ],
        "node_modules/react-dom/index.js": ["render", "hydrate"]
      }
    })
  ]
};
