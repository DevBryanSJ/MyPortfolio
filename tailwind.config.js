// Code for Hero Highlight component from AcernityUI
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

// Origional Tailwind config code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
      }, 
    },
    fontSize: {
      'h1': '2.986rem', 
      'h2': '2.488rem',
      'h3': '2.074rem', 
      'h4': '1.728rem', 
      'h5': '1.44rem', 
      'h6': '1.2rem',  
      'p': '1rem',  
      'small-1': '0.833rem', 
      'small-2': '0.694rem',   
    }, 
  },
  plugins: [
    addVariablesForColors,
    function ({
      matchUtilities,
      theme
    }) {
      matchUtilities({
        "bg-dot-thick": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 15 15" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
          )}")`, 
        }), 
      }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" }); 
    }, 
  ], 
};

// Code for Hero Highlight component from AcernityUI
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars, 
  });
}