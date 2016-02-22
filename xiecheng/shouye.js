


import React, {
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  AppRegistry,
} from 'react-native';

var xiecheng = React.createClass({
	render:function() {
		return (
			<NavigatorIOS style = {{flex: 1}} initialRount={{title: '首页', component: Index}}/>
		);
	}
});


const styles = StyleSheet.create({
	
});

AppRegistry.registerComponent('xiecheng', () => xiecheng);
