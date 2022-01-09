module.exports = {
  content: ["./pages/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}"],
  // purge: ["./pages/**/*.tsx", "./styles/**/*.css"],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'thumbnail-img': "url('/assets/img/thumbnail.png')"
      }
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
    },
  },
};
