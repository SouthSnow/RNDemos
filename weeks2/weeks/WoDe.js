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


var WoDe = React.createClass({
	render: function() {
		return (
			<View style={{justifyContent: 'center'}}>
			<Text>我的</Text>
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


module.exports = WoDe;
