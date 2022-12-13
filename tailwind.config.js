/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ironGrey: "#363944",
        blackRussian: "#27282d",
        darkCharcoal: "#2e3234",
      },
      backgroundImage: {
        'speed-frame': "url('/assets/speed/speedup_bg_frame.webp')",
        'speed-frame-blue': "url('/assets/speed/speedup_bg_frame-blue.webp')",
        'speed-frame-purple': "url('/assets/speed/speedup_bg_frame-purple.webp')",
        'speed-frame-orange': "url('/assets/speed/speedup_bg_frame-orange.webp')",
        'banner-blue': "url('/assets/Banner-blue.webp')",
        'bg-building-blue': "url('/assets/bg_building_blue.webp')",
      },
      boxShadow: {
        "neumorphic": "inset 2px 2px 5px rgba(163, 177, 198, 0.5),inset -2px -2px 5px rgba(0,0,0,0.5)"
      }

    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"],
      audiowide: ['Audiowide', 'cursive']
    },
  },
  plugins: [],
}
