import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';



// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 26
// 		}
// 		this.nextYear = this.nextYear.bind(this);
// 	}

// 	nextYear () {
// 		this.setState(state => ({
// 			years: ++state.years
// 		}))
// 	}

// 	render() {
// 		const { name, surname, link } = this.props;
// 		const {years} = this.state;

// 		return (
// 			<>
// 				<button onClick={this.nextYear}>++</button>
// 				<h1>My name is {name}, surname - {surname}, years - {years}</h1>
// 				<a href={link}>My profile</a>
// 			</>
// 		)
// 	}
// }


// const All = () => {
// 	return (
// 		<>
// 			<WhoAmI name='John' surname='Gruve' link='www.google.com' />
// 			<WhoAmI name='Joh' surname='Gruv' link='www.google.com' />
// 			<WhoAmI name='Jo' surname='Gru' link='www.google.com' />
// 		</>
// 	)
// }


ReactDOM.render(
	<>
		<App />
	</>,
	document.getElementById('root')
);


