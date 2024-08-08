import { AppColors } from "./src/lib/theme/AppColors";
import type { Config } from "tailwindcss";
const base = 16;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          200: AppColors.black[200],
          subdued: AppColors.black.subdued,
          label: AppColors.black.label,
          900: AppColors.black[900],
          "on-neutral": AppColors.black["on-neutral"],
          secondary: AppColors.black["secondary"],
        },
        primary: {
          200: AppColors.primary[200],
          400: AppColors.primary[400],
          500: AppColors.primary[500],
          border: AppColors.primary.border,
          700: AppColors.primary[700],
          "on-primary": AppColors.primary["on-primary"],
        },
        blue: {
          100: AppColors.blue[100],
          500: AppColors.blue[500],
        },
        orange: {
          400: AppColors.orange[400],
          500: AppColors.orange[500],
        },
        "border-light": AppColors["border-light"],
      },
      fontFamily: {
        sans: ["var(--font-pptelegraf)"],
      },
      fontSize: {
        xxs: `${8 / base}rem`,
        "13px": `${13 / base}rem`,
      },
      lineHeight: {
        "22px": `${22 / base}rem`,
      },
    },
  },
  plugins: [],
};
export default config;
