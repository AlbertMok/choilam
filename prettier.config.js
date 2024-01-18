/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss"), "prettier-plugin-prisma"],
  printWidth: 150,
};
