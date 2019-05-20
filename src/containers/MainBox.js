import React                                 from 'react'
import MenuBar                               from '../components/MenuBar.js'
import {Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

	state = {
		active: '',
		currentActive: 'profile'
	};

	handleClick = e => {
		this.setState({
			active: e.target.id
		})
	};

	getElements = () => {
		const id = this.state.active;
		if (id === 'photo') {
				return <Photos />
		}
		else if (id === 'cocktail') {
			return <Cocktails />

		}
		else if (id === 'pokemon') {
			return <Pokemon />

		}
		else if (id === 'profile') {
				return <Profile />

		}
		else {
			console.log('wrong input');
		}
	};

	render() {

		/*

		Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

		*/

		return (
			<div>
				<MenuBar handleClick={this.handleClick}/>
				{this.getElements()}
			</div>
		)
	}
}

export default MainBox
