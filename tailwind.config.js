/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        softGray: "#E6E8E9",
        midGray: "#C1C2BD",
        softBlack: "#433C39",
        darkBlack: "#1A1B1C",
        deepGray: "#80908F",
        orange: "#fd9319",
      },
    },
  },
  plugins: [],
};
