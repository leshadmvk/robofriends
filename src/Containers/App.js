import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
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
			const {robots, searchfield} = this.state
			const filterRobots = robots.filter(robot =>{ // i want to filter the robots 
			return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //to now have only includes in the searchfield
		})
			return !robots.length ? //тернарный
			 <h1 className='tc'>Loading</h1> :
				(
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
	

export default App;