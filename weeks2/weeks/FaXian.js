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
	ListView,
} = React;

var url = "http://www.wanzhoumo.com/wanzhoumo?UUID=97B42FCB-7D7A-4D41-A80B-24644CBEE429&app_key=800000002&app_v_code=12&app_v_name=2.2.1&format=json&lat=22.562437&lon=113.904369&method=topic.list&os=iphone&pagesize=20&r=wanzhoumo&sign=70d327f6894e948f046e7c45cff935f9&timestamp=1409673032&top_session=u96eu235ali11gaf2u3g9csh32&v=2.0";
var Model = {
		title:"",
		introduction:"",
		pic:'',
	};

var TimerMixin = require('react-timer-mixin');

var FaXian = React.createClass({

	mixins: [TimerMixin],

	getInitialState:function(){
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged:(row1, row2)=> row1 !== row2,
			}),
		}
	},

	componentWillMount:function() {
		console.log('componentWillMount:');
		this.getData(url);
	},

	getData:function(url) {
		fetch(url)
		.then((response)=>response.json())
		.catch((error)=>{
			this.state = {
				dataSource: undefined,
			},
			console.log('数据请求失败:' + error);
		})
		.then(json=>{

			var datas = json.result['list'];
			var datas2 = [];
			for (var i = datas.length - 1; i >= 0; i--) {
				var obj = datas[i];
				var model = new Object;
				model.title = obj.title;
				model.introduction = obj.intro;
				model.pic = obj.pic_show;
				datas2.push(model);
			}

			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(datas2),
			}),
			console.log('数据请求成功:' + this.state.dataSource);
		})
		.done();
	},

	_renderRow: function(rowData: Object, sectionID, rowID) {
		var uri = rowData.pic;
		var title = rowData.title;
		var subTitle = rowData.introduction;
		console.log('title:' + subTitle);

		return (
			<View style = {{flex:1,}}>
				<Image style = {styles.image} source = {{uri:uri}}/>
				<Text style={styles.title}> {title} </Text>
				<Text style = {styles.subTitle}>{subTitle}</Text>
			</View>
		);
	},

	render: function() {
		return (
			<View style={{justifyContent: 'center', flex:1}}>
				<ListView style = {styles.container,{flex:1}} dataSource = {this.state.dataSource} renderRow = {this._renderRow}/>
			</View>
		)
	},
});

var styles = StyleSheet.create({
	container: {
		backgroundColor:'red',
		flex: 1,
	},
	image: {
		flex:1, 
		flexDirection: 'row',
		 height: 250,
		 resizeMode:Image.resizeMode.contain,
	},
	title: {
		fontSize:20, 
		marginLeft:10, 
		marginTop:10
	},
	subTitle:{
		fontSize:16, 
		marginLeft:10, 
		marginTop:10
	},


});


module.exports = FaXian;
