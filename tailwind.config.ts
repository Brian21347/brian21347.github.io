import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      sans: ["inter", ...defaultTheme.fontFamily.sans],
      colors: {
        white: "var(--white)",

        // text box backgrounds
        slate: {
          0: "var(--slate-0)",
          1: "var(--slate-1)",
          2: "var(--slate-2)",
          3: "var(--slate-3)",
          4: "var(--slate-4)",
          5: "var(--slate-5)",
          6: "var(--slate-6)",
          7: "var(--slate-7)",
        },

        // text colors
        text: {
          0: "var(--text-0)",
          1: "var(--text-1)",
          2: "var(--text-2)",
          3: "var(--text-3)",
          4: "var(--text-4)",
          5: "var(--text-5)",
          6: "var(--text-6)",
          7: "var(--text-7)",
        },

        // section backgrounds
        teal: {
          0: "var(--teal-0)",
          1: "var(--teal-1)",
          2: "var(--teal-2)",
          3: "var(--teal-3)",
          4: "var(--teal-4)",
          5: "var(--teal-5)",
          6: "var(--teal-6)",
          7: "var(--teal-7)",
        },

        cyan: {
          0: "var(--cyan-0)",
          1: "var(--cyan-1)",
          2: "var(--cyan-2)",
          3: "var(--cyan-3)",
          4: "var(--cyan-4)",
          5: "var(--cyan-5)",
          6: "var(--cyan-6)",
          7: "var(--cyan-7)",
        },

        sky: {
          0: "var(--sky-0)",
          1: "var(--sky-1)",
          2: "var(--sky-2)",
          3: "var(--sky-3)",
          4: "var(--sky-4)",
          5: "var(--sky-5)",
          6: "var(--sky-6)",
          7: "var(--sky-7)",
        },

        // clears
        clear: {
          25: "var(--clear-25)",
          35: "var(--clear-35)",
          50: "var(--clear-50)",
          75: "var(--clear-75)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
