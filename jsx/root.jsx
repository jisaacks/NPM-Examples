define(function(require){

  var React = require("react");
  var Hw    = require("jsx/hw");

  return React.createClass({
    render: function() {
      return (
        <div className="wrapper">
          <Hw/>
        </div>
      );
    }
  });

});
