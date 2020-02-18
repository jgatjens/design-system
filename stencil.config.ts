import { Config } from "@stencil/core"

export const config: Config = {
  namespace: "ni-stencil",
  bundles: [
    { components: ["ni-global-css"] },
    { components: ["ni-footer", "ni-cities", "ni-circle-text"] },
    { components: ["ni-copyright"] },
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
}
