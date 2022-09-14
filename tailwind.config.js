module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      smallest: "300px",
      xxxs: "365px",
      xxs: "400px",
      xs: "470px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      cxl: "1100px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      
    },
    extend: {
      colors: {
        primaryBlack: "#292929",
        primaryBlue: "#0086B0",
        greyishWhite: "#F0F0F0",
        almostWhite: "#FDFEFF",
        lifestyle: "#E5BF5E",
        tech: "#41D750",
        nature: "#6397E5",
      },
      fontFamily: {
        harmattan: ["Harmattan", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('./images/homeHero.png')",
        bg2: "url('./images/homebg2.png')",
      },
    },
  },
  plugins: [],
};
