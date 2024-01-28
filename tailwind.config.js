/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter var"
      },
      colors:{
        skyblue: '#90e0ef',
        btncolor: '#003049',
        gcolor: '#eaf4f4',
        t_bg_color: "#e9edc9",
        f_text_color : "#0466c8"
      },
      spacing:{
        350: "350px",
        500: "500px",
        700: "700px",
        800: "800px"
      },
      screens:{
        'xsm' : {'max' : '640px'},
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }

  ],
}

