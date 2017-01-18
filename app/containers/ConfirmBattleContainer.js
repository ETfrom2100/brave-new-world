var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');
var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState:function(){
		return {
			isLoading: true,
			playersInfo : []
		}
	},
	componentWillMount:function(){
		
	},
	handleInitiateBattle:function(){
		this.context.router.push({
			pathname: '/results',
			state:{
				playersInfo:this.state.playersInfo
			}
		});	
	},
	render:function(){
		return <ConfirmBattle 
		isLoading = {this.state.isLoading} 
		playersInfo={this.state.playersInfo}
		onInitiateBattle = {this.handleInitiateBattle}/>
	},
	componentDidMount:function(){
		var query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then(function(players){
			//console.log('PLAYERS',players);
			this.setState({
				isLoading:false,
				playersInfo:[players[0],players[1]]
			})
		}.bind(this));
	},
	componentWillReceiveProps:function(){
	
    },
	componentWillUnmount:function(){
		
	}
	
});

module.exports = ConfirmBattleContainer;