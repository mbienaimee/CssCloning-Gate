/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontWeight: {
        color: [
          [
            "Libre Franklin",
            "Helvetica Neue",
            Helvetica,
            Arial,
            Verdana,
            sans - serif,
          ],
        ],
      },
    },
  },
  plugins: [],
};
