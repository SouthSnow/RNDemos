


import React, {
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  AppRegistry,
} from 'react-native';

var Index = require('./Index');
var Index2 = require('./Index2');

var xiecheng = React.createClass({
	render:function() {
		return (
			<NavigatorIOS style = {{flex: 1}} initialRoute={{title: '首页', component: Index2}}/>
		);
	}
});

AppRegistry.registerComponent('xiecheng', () => xiecheng);
