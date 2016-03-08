
'use strict';
var React = require('react-native');

var {
	ListView,
	View,
	Image,
	Text,
	StyleSheet,
	ActivityIndicatorIOS,
} = React;

var urls =    [	
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.562433&lon=113.904398&method=activity.List&os=iphone&pagesize=30&r=wanzhoumo&sign=0f97295d4c92c73217ff8341fb11b20c&sort=default&timestamp=1409632143&top_session=n8i2d0ie4g77qfb8dmoot08ct7&v=2.0",
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.535044&lon=113.944849&method=activity.List&offset=30&os=iphone&pagesize=30&r=wanzhoumo&sign=7cf20949bd9c5990598836ba6ef073da&sort=default&timestamp=1410335762&v=2.0",
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.535044&lon=113.944849&method=activity.List&offset=60&os=iphone&pagesize=30&r=wanzhoumo&sign=de3ff25211b760930bb81433e527b5df&sort=default&timestamp=1410335834&v=2.0",
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.535044&lon=113.944849&method=activity.List&offset=90&os=iphone&pagesize=30&r=wanzhoumo&sign=8f2e34692044cb173e023e6d5ef6e9f5&sort=default&timestamp=1410335871&v=2.0",
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.535044&lon=113.944849&method=activity.List&offset=120&os=iphone&pagesize=30&r=wanzhoumo&sign=46db75331082d7beb1c11efac327df23&sort=default&timestamp=1410335913&v=2.0",
		"http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&is_near=1&is_valid=1&lat=22.535044&lon=113.944849&method=activity.List&offset=150&os=iphone&pagesize=30&r=wanzhoumo&sign=f1f7bb7819db7b4fd36464ef41b9d477&sort=default&timestamp=1410335945&v=2.0"
	];

var TimerMixin = require('react-timer-mixin');//这里需要执行一个命令，把包导入npm i react-timer-mixin --save


var WKListView = React.createClass({

	mixins: [TimerMixin],


	getInitialState() {
		
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			isLoading: true,
		}
	},
	
	componentWillMount: function() {
		this.getData(urls[0]);
	},

	getData: function(url) {
		fetch(url)
		.then((response)=>response.json())
		.catch(error => {
			this.state = {
				dataSource: undefined,
			},
			console.log('请求失败' + error);
		})
		.then(json => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(json.result['list']),
				isLoading: false,
			}),
			console.log('请求成功' + this.state.dataSource);

		})
		.done();
	},

	renderRow: function(rowData: Object, sectionID, rowID) {
		console.log(rowData.title);
		var imgURL = rowData.pic_show[0];

		return (
			<View style = {{height: 230, flex: 1}}>
				<Image style = {{flex:1}} source = {{uri: imgURL}}>
					<Text style = {styles.text}>
						{rowData.title}
					</Text>
				</Image>
			</View>
		);
	},

	render: function() {

		var spinner = this.state.isLoading ? (<ActivityIndicatorIOS hidden = 'true' size = 'large'/>) : (<View />);
		return (
			<View style={{flex: 1}}>
				<ListView
				 style = {styles.container}
				 dataSource ={this.state.dataSource}
				 initialListSize = {10}
				 pageSize = {10}
				 onEndReachedThreshold = {20}
				renderRow = {this.renderRow} />
				 {spinner}
			 </View>
		);
	},

});



var styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},
	text: {
		color: '#02cafc',
		fontSize: 16,
		marginTop:200, 
		height: 30, 
		backgroundColor: 'rgba(1,1,1,0)',
		paddingLeft:20,
	},
});

module.exports = WKListView;





module.exports = WKListView;

