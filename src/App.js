import { render } from '@testing-library/react';
import React, { Component } from 'react';


const App = ( )=> ( <Counter></Counter> )
	


// 
// state
// 

// stateを使う時、前にthisをつける

// classコンポーネント
class Counter extends Component{

	// constructorは初期化処理で実行されるメソッド
	constructor(props){
		super(props)
		console.log(this.state)
		this.state = { count: 0}
	}
	render(){
		console.log(this.state)
		return(<div>count: { this.state.count }</div>)
	}
}




export default App;
