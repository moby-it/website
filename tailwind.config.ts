import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          "50": "#f0f6fe",
          "100": "#ddeafc",
          "200": "#c3dafa",
          "300": "#99c4f7",
          "400": "#69a5f1",
          "500": "#4683eb",
          "600": "#3165df",
          "700": "#2a55d5",
          "800": "#2744a6",
          "900": "#253c83",
          "950": "#1b2650",
        },
        lightblue: {
          "50": "#f2f7fc",
          "100": "#e1ecf8",
          "200": "#bad5f0",
          "300": "#a5caeb",
          "400": "#7aaee0",
          "500": "#5a91d7",
          "600": "#4676ca",
          "700": "#3c64b9",
          "800": "#365297",
          "900": "#304778",
          "950": "#212d4a",
        },
      },
      fontFamily: {
        sans: ["Aeonik Pro", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
};
