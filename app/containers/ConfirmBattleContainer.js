var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
	render:function(){
		return <ConfirmBattle isLoading = {this.state.isLoading} playersInfo={this.state.playersInfo}/>
	},
	componentDidMount:function(){
		var query = this.props.location.query;
	},
	componentWillReceiveProps:function(){
	
    },
	componentWillUnmount:function(){
		
	}
	
});

module.exports = ConfirmBattleContainer;