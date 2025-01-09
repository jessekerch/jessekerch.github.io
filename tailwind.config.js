/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        harrierBLUE: "#70CAF2", 
        harrierPINK: "#DB2877", 
        harrierBLACK: "#28282A", 
        harrierWHITE: "#FFFFFF", 
        harrierGRAY: "#E4E4E7", 
        harrierYELLOW: "#FEE01B", 
        harrierOFFWHITE: "#ececec", 
      
      },
    },
  },
};
