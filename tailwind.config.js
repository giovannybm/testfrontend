module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["nunito-sans", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-theme-0": "#00eefd",
        "blue-theme-1": "#00bde6",
        "blue-theme-2": "#008abf",
      },
      linearBorderGradients: (theme) => ({
        colors: theme("colors"),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-border-gradients")()],
};
