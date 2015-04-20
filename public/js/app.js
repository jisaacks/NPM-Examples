define(function(require){

  require("jquery.serializejson");

  var $     = require('jquery');
  var React = require('react');
  var root  = require('jsx/root');

  $(function(){

    React.render(React.createElement(root), document.body);

  });

});
