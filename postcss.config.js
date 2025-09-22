module.exports = {
  plugins: {
    // This explicitly requires the tailwindcss module, solving the resolution issue.
    tailwindcss: require("tailwindcss"),
    autoprefixer: require("autoprefixer"),
  },
};
