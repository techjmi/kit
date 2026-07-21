const config = {
  plugins: {
    "@tailwindcss/postcss": {
      base: "./src/app/globals.css",
      content: {
        files: [
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
          "./node_modules/tektokit/dist/**/*.js",
        ],
      },
    },
  },
};

export default config;
