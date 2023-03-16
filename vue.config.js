module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public'
};