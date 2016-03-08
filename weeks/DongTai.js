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


var DongTai = React.createClass({
	render: function() {
		return (
			<View style={{justifyContent: 'center'}}>
			<Text>动态</Text>
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


module.exports = DongTai;
