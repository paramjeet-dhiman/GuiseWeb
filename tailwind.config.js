module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "core-black": "#23282F",
        "core-guise": "#007eff",
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-teal": "#00c7bc",
        // "bookmark-blue": "#242A45",
        "bookmark-blue": "#0e141b",
        "bookmark-grey": "#9194A2",
        "bookmark-orange": "#f4511e",
        "bookmark-white": "#f7f7f7",
        "bookmark-smoke": "#F9F9F9",
        "bookmark-offWhite": "#F3F3F3",
        "bookmark-clay": "#e8f5ff",
        color: {
          0: "#fff",
          50: "#f6f8fb",
          100: "#e7ebf0",
          200: "#bcbfc1",
          300: "#a0a4a7",
          400: "#83888c",
          500: "#4a5056",
          600: "#373d43",
          700: "#252a2f",
          800: "#14171a",
          900: "#030405",
        },
        social: {
          facebook: "#1877F2",
          instagram: "#E4405F",
          twitter: "#1DA1F2",
          youtube: "#FF0000",
          linkedin: "#0A66C2",
        },
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        roll: {
          "0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%": {
            transform: "scale(1)",
          },
          "50%": { transform: "scaleY(0)" },
        },

        goRight: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0px)" },
        },
        goLeft: {
          "0%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-30px)" },
          "100%": { transform: "translateX(0px)" },
        },

        movementN: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0rem)" },
          "0%": { transform: "translateX(-8rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
        movementP: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0rem)" },
          "0%": { transform: "translateX(8rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
      },

      animation: {
        "spin-slow": "spin 2s linear infinite",
        wiggle: "wiggle 1s  infinite",
        roll: "roll 3s infinite ",
        movementRight: "movementN 2s  infinite",
        movementLeft: "movementP 2s  infinite",
        goRight: "goRight 2s infinite",
        goLeft: "goLeft 2s infinite",
      },

      height: (theme) => ({
        "screen/3": "60vh",
        hb: "60%",
        hm: "80%",
        hl: "90%",
        hxl: "28rem",
        hlg: "24rem",
      }),
      width: (theme) => ({
        wb: "60%",
        wm: "80%",
        wl: "94%",
        wxl: "50rem",
      }),
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: { center: true },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
