
'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');

var WKListView = require('./WKListView');

var {
	View,
	Text,
	Image,
	StyleSheet,
	NavigatorIOS,
	TabBarIOS,
	AppRegistry,
	Component
} = React;

var sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
] ;


var Slider = React.createClass({

	render() {
		return (
			<Swiper style = {{height:80}} showButtons={false} autoplay={true} height = {150} showsPagination={false}>
				<Image style = {[styles.slide,]} source = {{uri: this.props.sliderImgs[0]}}></Image>
				<Image style = {[styles.slide,]} source = {{uri: this.props.sliderImgs[1]}}></Image>
				<Image style = {[styles.slide,]} source = {{uri: this.props.sliderImgs[2]}}></Image>
			</Swiper>
		)
	}
});

var Detail = React.createClass({
			

	render: function() {
		console.log(this.props.sliderImgs);
		return (
			<View style = {{flex:1, marginTop: 64}}><Slider sliderImgs={this.props.sliderImgs}/></View>
		)
	},

});


var styles = StyleSheet.create({
	container: {
		backgroundColor: "#f2f2f2",
		flex: 1,
	},

	wrapper: {
		height: 80,		
	},
	slide: {
		height: 80,
		resizeMode: Image.resizeMode.contain,
	},
	sbu_view:  {
		height: 84,
		marginLeft: 5,
		marginRight: 5,
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		flexDirection: 'row',
	},
	sbu_red: {
		backgroundColor: "#fa6778",
		borderColor: '#fa6778',
		marginTop: -70,
	},
	sbu_blue: {
		backgroundColor: "#3d98ff",
		borderColor: "#3d98ff",
	},
	sbu_green: {
		backgroundColor: '#5ebe00',
		borderColor: '#5ebe00',
	},
	sbu_yellow: {
		backgroundColor: '#fc9720',
		borderColor: '#fc9720',
	},
	sbu_flex: {
		flex: 1,
	},
	sbu_borderRight:{
  		borderColor:'#fff',
  		borderRightWidth: 0.5,
  	},
	sbu_icon_img: {
		height: 40,
		width: 40,
		resizeMode: Image.resizeMode.contain,
	},
	font16: {
		fontSize: 17,
		color: '#fff',
		fontWeight: '900',
	},

	sub_con_flex: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sub_text: {
		justifyContent: 'center',
	},

	sbu_borderBottom: {
		borderBottomWidth: 0.5,
		borderBottomColor: '#fff',
	},
	img_view: {
		height: 62,
		marginLeft: 5,
		marginRight: 5,
		flexDirection: 'row',
		marginBottom: 20,
		backgroundColor: '#fff',
	},

	img_flex: {
		flex: 1,
		borderWidth: 1,
	},
	img_wh: {
		height: 59,
		borderRightWidth:0,
		resizeMode: Image.resizeMode.contain,
	},
});

module.exports = Detail;










