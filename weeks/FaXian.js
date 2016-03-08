'use strict';

var React = require('react-native');

var {
	View,
	Text,
	Image,
	StyleSheet,
	NavigatorIOS,
	TabBarIOS,
	AppRegistry,
} = React;


var FaXian = React.createClass({
	render: function() {
		return (
			<View style={{justifyContent: 'center'}}>
			<Text>发现</Text>
			</View>
		)
	},
});

var styles = StyleSheet.create({
	container: {
		backgroundColor:'red',
		flex: 1,
	},

});


module.exports = FaXian;
