var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

elixir.config.js.folder = '../../src';
elixir.config.js.outputFolder = '../dist';

elixir(function(mix) {
    mix.browserify('main.js');
});
