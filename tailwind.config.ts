import { AppColors } from "./src/lib/theme/AppColors";
import type { Config } from "tailwindcss";

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
          "text-on-neutral": AppColors.black["text-on-neutral"],
        },
        primary: {
          200: AppColors.primary[200],
          400: AppColors.primary[400],
          500: AppColors.primary[500],
          border: AppColors.primary.border,
          700: AppColors.primary[700],
          "text-on-primary": AppColors.primary["text-on-primary"],
        },
        orange: {
          400: AppColors.orange[400],
          500: AppColors.orange[500],
        },
      },
      fontFamily: {
        sans: ["var(--font-pptelegraf)"],
      },
    },
  },
  plugins: [],
};
export default config;
