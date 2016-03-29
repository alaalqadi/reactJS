/**
 * Created by alaa-lqadi on 22/03/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var divStyle = {
    color: 'red',
    //WebkitTransition: 'all', // note the capital 'W' here
    //msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

var Main = React.createClass({
    render: function () {
        return (
            <div>
                asdasd
            </div>

        )
    }
});

ReactDOM.render(<div style={divStyle}>Hello World!</div>, document.getElementById("app"));