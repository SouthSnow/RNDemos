

'use strict';

var Swiper = require('react-native-swiper');
var React = require('react-native');
var {
 StyleSheet,
  NavigatorIOS,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} = React;


var sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
] ;

var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

var Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Slider = React.createClass({
	render: function() {
		return (
			<Swiper style = {{height: 80}} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
				<Image style = {[styles.slide,]} source = {{uri: sliderImgs[0]}}></Image>
				<Image style = {[styles.slide,]} source = {{uri: sliderImgs[1]}}></Image>
				<Image style = {[styles.slide,]} source = {{uri: sliderImgs[2]}}></Image>
			</Swiper>
		);
	}
});

var Index = React.createClass({
	render:function() {
		return (
			<ScrollView>
				<View style = {styles.container}>
					<Slider/>
					
					<View>{this.renderView(styles.sbu_red,['酒店','海外','周边','团购.特惠','客栈.公寓'], BUIcon[0])}</View>
					<View>{this.renderView(styles.sbu_blue,['机票','火车票','接收机','汽车票','自驾.专车'], BUIcon[1])}</View>
					<View>{this.renderView(styles.sbu_green,['旅游','门票.玩乐','出境wifi','邮轮','签证'], BUIcon[2])}</View>
					<View>{this.renderView(styles.sbu_yellow,['攻略','周末游','礼品卡','美食.购物','更多'], BUIcon[3])}</View>
					
					<View style={[styles.img_view]}>
						<View style = {[styles.img_flex, {borderRightWidth: 0.5}]}>
							<Image style={[styles.img_wh]} source = {{uri: Images[0]}}></Image>
						</View>
						<View style={[styles.img_flex, {borderRightWidth: 0.5}]}>
							<Image style = {styles.img_wh} source={{uri: Images[1]}}></Image>
						</View>
					</View>
				</View>
			</ScrollView>
		);
	},

	renderView:function(style,items,imageurl) {
		return (
			<View style={[style, styles.sbu_view]}>
			<TouchableHighlight underlayColor={"#fa6778"} style={{flex:1}}>
				<View style = {[styles.sbu_flex, styles.sbu_borderRight]}>
					<View style = {[styles.sub_con_flex, styles.sub_text]}>
						<Text style={[styles.font16]}>{items[0]}</Text>
					</View>
					<View style = {[styles.sub_con_flex]}>
						<Image style={[styles.sbu_icon_img]} source={{uri: imageurl}}></Image>
					</View>
				</View>
			</TouchableHighlight>
			<View style = {[styles.sbu_flex, styles.sbu_borderRight]}>
				<View style = {[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
					<Text style = {styles.font16}>{items[1]}</Text>
				</View>
				<View style = {[styles.sub_con_flex, styles.sub_text]}>
					<Text style = {styles.font16}>{items[2]}</Text>
				</View>
			</View>
			<View style = {[styles.sbu_flex,]}>
				<View style = {[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
					<Text style = {styles.font16}>{items[3]}</Text>
				</View>
				<View style = {[styles.sub_con_flex, styles.sub_text]}>
					<Text style = {styles.font16}>{items[4]}</Text>
				</View>
			</View>
			</View>			
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


module.exports = Index;











