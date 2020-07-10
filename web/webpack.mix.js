const mix = require("laravel-mix");

mix
  .browserSync("vuesplash.test")
  .js("resources/js/app.js", "public/js")
  .version();

mix.browserSync({
  proxy: "0.0.0.0:8081", // アプリの起動アドレス
  open: false // ブラウザを自動で開かない
});
