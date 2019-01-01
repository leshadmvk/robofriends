import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import'./App.css'


class App extends Component {
	constructor(){
		super();
		this.state ={ //we have app component which has 2 states
			robots: [], //first state
			searchfield:'' //second state
		//as i understod, that the state can be changed in the  copmponent
		//in the other hand the props can be only sended and recived 
		}
	}	

		componentDidMount(){
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(users => this.setState({robots: users}))
		}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}


	render() {
			const filterRobots = this.state.robots.filter(robot =>{ // i want to filter the robots 
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //to now have only includes in the searchfield
		})
			if(this.state.robots.length === 0){
				return <h1 className='tc'>Loading</h1>
			} else {
				return (
					<div className='tc'>
					  <h1 className='f1'>robofriends</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filterRobots}/>
						</Scroll>
					</div>
				);
			}
	 }
}
	

export default App;