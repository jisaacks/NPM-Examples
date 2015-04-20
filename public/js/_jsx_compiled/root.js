define(function(require){

  var React = require("react");
  var Hw    = require("jsx/hw");

  return React.createClass({
    render: function() {
      return (
        React.createElement("div", {className: "wrapper"}, 
          React.createElement(Hw, null)
        )
      );
    }
  });

});
