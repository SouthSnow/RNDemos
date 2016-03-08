'use strict';

import React, {
	View,
	Text,
	ScrollView,
	StyleSheet,
	NavigatorIOS,
	Image,
	TouchableOpacity,
} from 'react-native';


var Index2 = React.createClass({
	render: function() {
		var _scrollView: ScrollView;
		return (
			<View style = {styles.container}>
				<ScrollView
				 style = {styles.scroll_view} 
				 ref={(scrollView)=>{_scrollView = scrollView;}}
				  automaticallyAdjustContenInsets={true} 
				  onScroll={()=>{console.log('onScroll!');}} 
				  scrollEventThrottle={200} >
					{THUMBS.map(function(index, elem) {
						return <Thumb key = {elem} uri = {index} />;
					})}
				</ScrollView>
				<TouchableOpacity style={styles.button} onPress={()=>{_scrollView.scrollTo({x:x, y: y+=150});}}>
					<Text>scroll to start</Text>
				</TouchableOpacity>
			</View>			
		);
	},
});

var Thumb = React.createClass({

	var props = {
		uri:'',
		key: '',
	};

	shouldComponentUpdate: function(nextProps, nextState) {
		return false;
	},
	render: function() {
		return (
			<View>
				<Image style = {styles.img} source = {{uri: this.props.uri}}></Image>
			</View>
		);
	},
});


var THUMBS =  [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];
THUMBS = THUMBS.concat(THUMBS);
THUMBS = THUMBS.concat(THUMBS);
THUMBS = THUMBS.concat(THUMBS);
THUMBS = THUMBS.concat(THUMBS);

var x = 0;
var y = 150 + 84;
 var createThumbRow = (uri,key) => <Thumb key = {key} uri = {uri} />;

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'green',
		height: 400,
	},

	scroll_view: {
		paddingTop: 0,
		height: 300,
	},

	img: {
		height: 150,
	},

	button: {
		margin: 7,
		padding: 5,
		alignItems: 'center',
		backgroundColor: '#eaeaea',
		borderRadius: 3,
	},


});

module.exports = Index2;



