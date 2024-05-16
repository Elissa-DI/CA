const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', ...defaultTheme.fontFamily.sans],
        syne: ["Syne", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "rgba(37, 37, 37, 0.25)",
        primary_light: "rgba(15, 15, 15, 0.92)",
        secondary: "#ffffff",
        tertiary: "#BA6329",
        primary_dark: "rgb(132, 132, 132)",
        texts: "rgb(133, 133, 133)",
        borders: "rgba(34, 34, 34, 1)",
        navBorder: "rgb(41, 41, 41)",
        nav: "rgb(26, 26, 26)",
      },
      screens: {
        mobile: "320px",
        mobile_2: "360px",
        mobile_3: "375px",
        samsung: "390px",
        pro: "414px",
        pro_max: "428px",
        mini_tab: "768px",
        galaxy: "800px",
        air: "820px",
        ipad_pro: "834px",
        fold: "884px",
        mac_air: "1280px",
        laptop: "1728px",
        large_device: "2048px",
      },
    },
  },
  plugins: [],
};
