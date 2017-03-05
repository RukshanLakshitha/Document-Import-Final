var $ = jQuery = require('jquery');
var _ = require('lodash');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');

var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({
    render: function(){
        return(
            <div>Hello From React</div>
        );
    }
});

ReactDom.render(
    <MainInterface />,
    document.getElementById("main")
);