
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'



// classコンポーネント
class EventsNew extends Component{
	render(){
		// const props = this.props

		return(
			<React.Fragment>
				<h1>foo</h1>
			</React.Fragment>
			
		)
	}
}

// const mapDispatchToProps = ({ postEvent })

export default connect( null, null )(EventsNew)

