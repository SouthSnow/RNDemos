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
			<WKListView  navigator = {this.props.navigator} title = "Detail" />	
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
