// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import analogjsangular from "@analogjs/astro-angular";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import starlightSidebarTopics from "starlight-sidebar-topics";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RKT Design System",
      social: {
        github: "https://github.com/judgemavi-rocket/rds-prototype",
      },
      components: {
        Sidebar: "/src/components/ui/sidebar.astro",
      },
      customCss: ["/src/index.css"],
      plugins: [
        starlightSidebarTopics([
          {
            label: "React",
            link: "/react/get-started",
            items: [
              {
                label: "Getting Started",
                link: "/react/get-started",
              },
              {
                label: "Components",
                autogenerate: {
                  directory: "/react/components",
                },
              },
            ],
          },
          {
            label: "Angular",
            link: "/angular/get-started",
            items: [
              {
                label: "Getting Started",
                link: "/react/get-started",
              },
              {
                label: "Components",
                autogenerate: {
                  directory: "/angular/components",
                },
              },
            ],
          },
        ]),
      ],
    }),
    mdx({
      syntaxHighlight: "prism",
    }),
    react(),
    analogjsangular({
      vite: {
        transformFilter: (code, id) => {
          // Skip transformation for raw imports
          if (id.includes("?raw")) {
            return false;
          }
          return id.includes("src/components/angular");
        },
      },
    }),
  ],
  vite: {
    ssr: {},
    plugins: [tailwindcss()],
  },
});
