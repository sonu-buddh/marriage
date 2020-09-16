// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import '../stylesheets/application'
import "../packs/jquery.js"
import "../packs/jquery.min.js"


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// import '../packs/jquery.min.js'
// import '../packs/marriage.js'

const importAll = (r) => r.keys().map(r)
importAll(require.context('../images', false, /\.(png|svg|gif|jpg|eot|ttf|woff|woff2)$/));


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)


// window.jQuery = $;
// window.$ = $;
