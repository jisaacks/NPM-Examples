requirejs.config({
  baseUrl: 'vendor/js',
  paths: {
    "pub": '../../js',
    "jsx": '../../js/_jsx_compiled'
  },
  shim: {
    "jquery.serializejson": {
      deps: ["jquery"]
    }
  }
});

requirejs(['pub/app']);
