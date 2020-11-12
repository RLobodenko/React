import React from 'react'
//import Radium from 'radium'
import classes from './Car.css'



class Car extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log('Car componentWillReceiveProps', nextProps)
		
	}
	
	shouldComponentUpdate(nextProps, nextState) {
			console.log('Car shouldComponentUpdate', nextProps, nextState)
	return nextProps.name.trim() !== this.props.name.trim()
	}
	
	componentWillUpdate(nextProps, nextState) {
			console.log('Car componentWillUpdate', nextProps, nextState)
	}
		
		componentDidUpdate() {
				console.log('Car componentDidUpdate')
		}
	
	
	
	
	
	render(){ //метод render
	console.log('Car render')
	const inputClasses = [classes.input]
	// => -обозначение какой-то функции
	if (this.props.name !== '') {
		inputClasses.push(classes.green)
	} else {
		inputClasses.push(classes.red)
	}
		
if (this.props.name.length > 4){
	inputClasses.push('bold')
}
	
	const style = {
		border: '1px solid #ccc',
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
		':hover': {
			border: '1px solid #aaa',
			boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
			cursor: 'pointer'
		}
		
	}
	
	
		return (	
<div className="Car">

<h3>Car name: {this.props.name}</h3>
<p>Year:<strong>{this.props.year}</strong></p>
<input type="text" onChange={this.props.onChangeName} value={this.props.name} 
className={inputClasses.join(' ')}

/>
<button onClick={this.props.onDelete}>Delete</button>
	
	</div>
	
	)
}
}
//function Car() {
//	return (
//	<div>This is car component</div>
//	)
	
//}

//const car = () => { //стрелочная функция 
	//return (
	//<div>This is car component</div>
	//)
//}

//const car = () => (

	//<div>
	//This is car component
	//<strong>test</strong>
	//</div>

//)

// jsx- html подобный синтаксис
// фигурные скобки- это javascript становится

export default Car

