import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
export default defineConfig({
  tools: {
    rspack: {
      plugins: [
        process.env.RSDOCTOR === "true" &&
          new RsdoctorRspackPlugin({
            supports: {
              generateTileGraph: true,
            },
          }),
      ],
    },
  },
  plugins: [pluginReact(), pluginSass()],
});
