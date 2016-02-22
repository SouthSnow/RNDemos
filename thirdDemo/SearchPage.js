'use-strict';

var SearchResults = require('./SearchResults');

var React = require('react-native');
var {StyleSheet,Text, TextInput,View,TouchableHighlight,ActivityIndicatorIOS,Image,ActionSheetIOS} = React;

var styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565'
	},
	container: {
		padding: 30,
		marginTop:65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		alignSelf: 'stretch',
		marginTop: 10,
		justifyContent: 'center'
	},
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		marginTop: 10,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor:'#48BBEC',
		borderRadius: 8,
		color: '#48BBEC'
	},
	image: {
		width: 217,
		height: 138
	}
});

function urlForQueryAndPage(key, value, pageNumber) {
	var data = {
		country: 'uk',
		pretty: '1',
		encoding: 'json',
		listing_type: 'buy',
		action: 'search_listings',
		page: pageNumber
	};
	data[key] = value;

	var querystring = Object.keys(data)
		.map(function(key) {
			return key + '=' + encodeURIComponent(data[key])
		})
		.join('&');
	return 'http://api.nestoria.co.uk/api?' + querystring;
};

var SearchPage = React.createClass({

	// constuctor:function(props) {
	// 	// super(props);
	// 	this.state = {
	// 		searchString: 'london',
	// 		isLoading: false
	// 	};
	// },
	
	
	componentWillMount:function() {
		this.state = {
			searchString: 'london',
			isLoading: false,
			message: ''
		};
	},

	render: function(){
		var spinner = this.state.isLoading ? (<ActivityIndicatorIOS 
			hidden = 'true'
			size='large'/>) : (<View/>);
		return (
			<View style = {styles.container}>
				<Text style = {styles.description}>
					Seach for houses to buy!
				</Text>
				<Text style = {styles.description}>
					Seach by place-name, postcode or seach near your location.
				</Text>

				<View style = {styles.flowRight}>
					<TextInput style = {styles.searchInput} 
					value = {this.state.searchString} 
					placeholder = 'Searc via name or postcode'
					onChange={this.onSearchTextChanged}/>
					
					<TouchableHighlight style = {styles.button}
					underlayColor = '#99d9f4'
					onPress={this.onSearchPressed}>
						<Text style = {styles.buttonText}>Go</Text>

					</TouchableHighlight>
				</View>
				<TouchableHighlight style = {styles.button}
				underlayColor = '#99d9f4'  onPress = {this.showShareActionSheet}>
					<Text style = {styles.buttonText}>Location</Text>
				</TouchableHighlight>
				<Image source={require('image!house')} style={styles.image}/>
				{spinner}
				<Text style = {styles.description}>{this.state.message}</Text>
			</View>
		)
	},

	showShareActionSheet:function() {
		ActionSheetIOS.showShareActionSheetWithOptions({
			uri: 'http://code.facebook.com',
			message: 'message to go with the share url',
			subject: 'a subject to go in the email heading',
			excludedActivityTypes:[
				'com.apple.UIKit.activity.PostTowitter'
			]
		},
		(error) => {
			console.error(error);
		},
		(success, method) => {
			var text;
			if (success) {
				tex = 'Share via ${method}';
			} else{
				text = 'You didn\'share';
			}
		});
	},

	onSearchTextChanged:function(event) {
		this.setState({searchString:event.nativeEvent.text});
		console.log(this.state.searchString);
	},

	onSearchPressed: function() {
		var query = urlForQueryAndPage('place_name', this.state.searchString,1);
		this._executeQuery(query);
	},

	_executeQuery: function(query) {
		this.state = {
			isLoading:true
		};
		console.log(query);

		fetch(query)
			.then(response=>response.json())
			.then(json=>this._handleResponse(json.response))
			.catch(err=>
				this.state = {
					isLoading: false,
					message: 'Something bad happened' + error
				}
			);
	},

	_handleResponse(response) {
		this.setState({
			isLoading: false,
			message: ''
		});

		if (response.application_response_code.substr(0,1) === '1') {
			console.log('Properties found: ' + response.listings.length);
			this.props.navigator.push({
				title: 'Results',
				component: SearchResults,
				passProps: {listings: response.listings}
			})
		} else{
			this.setState({
				message: 'Location not recognized; please try again.'
			});
		};

	},



});




module.exports = SearchPage;


