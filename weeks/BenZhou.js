'use strict';

var React = require('react-native');

var WKListView = require('./WKListView');

var {
	View,
	Text,
	Image,
	StyleSheet,
	NavigatorIOS,
	TabBarIOS,
	AppRegistry,
} = React;


var BenZhou = React.createClass({
	render: function() {
		return (
			<WKListView/>	
		);
	},

});

var styles = StyleSheet.create({
	container: {
		backgroundColor:'red',
		flex: 1,
	},

});


module.exports = BenZhou;
