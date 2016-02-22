'use strict'

var React = require('react-native');
var {
     ScrollView,
     View,
     Platform,
     StyleSheet,
} = React;

var Home = React.createClass({
	getInitialState(){
		return {

		};
	},

	selectedShop: function(shopData: Object) {
		if (Platform.OS === 'ios') {
			this.props.navigator.push({
				title: '限时抢购',
				passProps:{shopData},
			});
		} else{};
	},
	selectRush: function(){
		if (Platform.OS === 'ios') {
			this.props.navigator.push({
				title: '限时抢购',
				passProps: {}
			})
		} else{};
	},
	selectedDiscount: function(url) {
		console.log('dis_' + url);
		if (Platform.OS === 'ios') {
			this.props.navigator.push({
				title: '限时抢购',
				passProps: {url},
			})
		} else{};
	},

	render() {
		return (
			<View style = {styles.container}></View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

module.exports = Home;









