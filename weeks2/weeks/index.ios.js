'use strict';

var React = require('react-native');

var BenZhou = require('./BenZhou');
var FaXian = require('./FaXian');
var ShouCang = require('./ShouCang');
var DongTai = require('./DongTai');
var WoDe = require('./WoDe');

var {
	View,
	Text,
	Image,
	StyleSheet,
	NavigatorIOS,
	TabBarIOS,
	AppRegistry,
} = React;

var WKListView = require('./WKListView');


var weeks = React.createClass({

      getInitialState() {
        return {
            selectedTab: 'benzhouhuodong',
        }
      },

      changeTab(tabName) {
        this.setState({
          selectedTab: tabName,
        });
      },

	render: function() {
		return (
			<TabBarIOS>
				<TabBarIOS.Item
				title = '本周活动'
				icon = {require('image!tab_activity_normal')}
				onPress = {()=>this.changeTab('benzhouhuodong')}
				selected = {this.state.selectedTab === 'benzhouhuodong'}>
					<NavigatorIOS
					style = {styles.container}
					 initialRoute = {{
					 	title: '本周活动',
					 	component: BenZhou,
					 }}/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
				title = '发现'
				icon = {require('image!tab_find_normal')}
				onPress = {()=>this.changeTab('faxian')}
				selected = {this.state.selectedTab === 'faxian'}>
					<NavigatorIOS
					style = {styles.container}
					 initialRoute = {{
					 	title: '发现',
					 	component: FaXian,
					 }}/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
				title = '收藏'
				icon = {require('image!tab_fav_inverse_normal')}
				onPress = {()=>this.changeTab('shoucang')}
				selected = {this.state.selectedTab === 'shoucang'}>
					<NavigatorIOS
					 initialRoute = {{
					 	title: '收藏',
					 	component: WKListView,
					 }}/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
				title = '动态'
				icon = {require('image!tab_trends_normal')}
				onPress = {()=>this.changeTab('dongtai')}
				selected = {this.state.selectedTab === 'dongtai'}>
					<NavigatorIOS
					style = {styles.container}
					 initialRoute = {{
					 	title: '动态',
					 	component: WKListView,
					 }}/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
				title = '我的'
				icon = {require('image!tab_my_normal')}
				onPress = {()=>this.changeTab('wode')}
				selected = {this.state.selectedTab === 'wode'}>
					<NavigatorIOS
					style = {styles.container}
					 initialRoute = {{
					 	title: '我的',
					 	component: WoDe,
					 }}/>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	},

});

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#fcfcfc',
		flex: 1,
	},
});

AppRegistry.registerComponent('weeks', ()=>weeks);











