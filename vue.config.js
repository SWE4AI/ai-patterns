module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ai-patterns/" : "/",
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public'
};