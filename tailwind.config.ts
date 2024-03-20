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
    },
    colors: {
      // text box backgrounds
      slate0: "var(--slate-0)",
      slate1: "var(--slate-1)",
      slate2: "var(--slate-2)",
      slate3: "var(--slate-3)",
      slate4: "var(--slate-4)",
      slate5: "var(--slate-5)",
      slate6: "var(--slate-6)",
      slate7: "var(--slate-7)",

      // text colors
      text0: "var(--text-0)",
      text1: "var(--text-1)",
      text2: "var(--text-2)",
      text3: "var(--text-3)",
      text4: "var(--text-4)",
      text5: "var(--text-5)",
      text6: "var(--text-6)",
      text7: "var(--text-7)",

      // section backgrounds
      teal0: "var(--teal-0)",
      teal1: "var(--teal-1)",
      teal2: "var(--teal-2)",
      teal3: "var(--teal-3)",
      teal4: "var(--teal-4)",
      teal5: "var(--teal-5)",
      teal6: "var(--teal-6)",
      teal7: "var(--teal-7)",

      cyan0: "var(--cyan-0)",
      cyan1: "var(--cyan-1)",
      cyan2: "var(--cyan-2)",
      cyan3: "var(--cyan-3)",
      cyan4: "var(--cyan-4)",
      cyan5: "var(--cyan-5)",
      cyan6: "var(--cyan-6)",
      cyan7: "var(--cyan-7)",

      sky0: "var(--sky-0)",
      sky1: "var(--sky-1)",
      sky2: "var(--sky-2)",
      sky3: "var(--sky-3)",
      sky4: "var(--sky-4)",
      sky5: "var(--sky-5)",
      sky6: "var(--sky-6)",
      sky7: "var(--sky-7)",

      // clears
      clear25: "var(--clear-25)",
      clear35: "var(--clear-35)",
      clear50: "var(--clear-50)",
      clear75: "var(--clear-75)",
    },
  },
  plugins: [],
};
export default config;
