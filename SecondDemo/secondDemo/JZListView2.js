
'use strict'

import React, {
	ListView,
	Platform,
	ProgressBarAndroid,
	StyleSheet,
	Text,
	View,
} from 'react-native';


var TimerMixin = require('react-timer-mixin');

var RecommendCell = require('./RecommendCell');
var JZWebView = require('./JZWebView');

var commend_url = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.982223,116.310502&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind';
var resultsCache = {
	shopData:{},
}

var LOADING = {};

var JZListView = React.createClass({
	mixins:[TimerMixin],
	timeoutID:(null:any),

	getInitialState: function(){
		return {
			isLoading: false,
			isLoadingTail: false,
			dataSource: new ListView.DataSource({
				rowHasChanged:(row1, row2) => row1 !== row2,
			}),
			filter:'',
			queryNumber:0,
		};
	},

	componentDidMount: function() {
		this.getCommendData();
	},

	getCommendData:function() {
		this.timeoutID = null;
		resultsCache.shopData = null;
		this.setState({
			isLoading: true,
			isLoadingTail: false,
		});

		fetch(commend_url)
			.then((response) => response.json())
			.catch((err) => {
				resultsCache.shopData = undefined;
				this.setState({
					dataSource: this.getDataSource([]),
					isLoading: false,
				});
			})
			.then((responseData)=>{
				resultsCache.shopData = responseData.data;
				this.setState({
					isLoading: false,
					dataSource: this.getDataSource(responseData.data),
				});
			})
			.done();
	},
	getDataSource: function(datas: Array<any>): ListView.dataSource {
		return this.state.dataSource.cloneWithRows(datas);
	},

	selectShop: function(shopData: Object) {
		if (Platform.OS === 'ios') {
			this.props.navigator.push({
				title:'限时抢购',
				component: JZWebView,
				passPropps:{shopData},
			});
		} else{};
	},
	renderSeparator: function )
		sectionID: number | string,
		rowID: number | string,
		adjacentRowHighlighted:boolean
	) {
		var style = styles/rowSeparator;
		if (adjacentRowHighlighted) {
			style = [style, styles.rowSeparatorHide];
		};

		return (
			<View key = {'SEP_' + sectionID + '_' + rowID} style = {style}/>
		);
	},

	renderRow: function(
		shopData: Object,
		sectionID: number | string,
		rowID: number | string,
		highlightRowFunc:(sectionID: ?number | string, rowID: ?number | string) => void,
	) {
		return (
			<RecommendCell key = {shopData.id}
			onSelect = {this.props.onSelect}
			onUnhighlight = {()=>highlightRowFunc(null, null)}
			onHighlight = {()=>highlightRowFunc(sectionID, rowID)}
			shopData = {shopData}
			/>
		);
	},

	render: function() {
		var content = this.state.dataSource.getRowCount === 0 ? 
		<NoCommend
			isLoading = {this.state.isLoading}
			/> : 
		<ListView
			ref = 'listview'
			renderSeparator = {this.renderSeparator}
			dataSource = {this.state.dataSource}
			renderRow = {this.renderRow}
			automaticallyAdjustContentInsets = {true}
			keyboarDismissMode = 'on-drag'
			keyboardShouldPersistTaps = {true}
			/>;

		return (
			<View style = {styles.container}>
				<View style = {styles.separator}/>
				{content}
			</View>
		);
	}
});

var NoCommend = React.createClass({
	render: function() {
		var text = '';
		if (!this.props.isLoading) {
			text = 'No recommend shop';
		};

		return (
			<View style = {[styles.container, styles.centerText]}>
				<Text style = {styles.noCommendText}>
					{text}
				</Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},

	centerText: {
		alignItems: 'center',
	},

	separator: {
		height: 1,
		backgroundColor: '#eeeeee',
	},
	rowSeparator: {
		backgroundColor: 'rgba(0,0,0,1)',
		height: 1,
		marginLeft: 4,
	},
	rowSeparatorHide: {
		opacity: 0.0,
	},
	noCommendText: {
		marginTop: 80,
		color: '#888888',
	},
});

nodule.exports = JZListView;











