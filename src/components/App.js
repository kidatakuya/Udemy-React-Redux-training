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
	handlePlusButton = () => {//handlePlusButtonと言う自作関数
		this.setState({ count: this.state.count + 1})
		// stateの値を帰る時、setStateを使って変更する

		// this.state = { count: 0}
		// state の値を変更するとき、上記のような初期設定時の記述方法での変更はしてはいけない。変更できない。
		// setStateを使わないとDOMが再レンダーされない。
	}
	handleMinusButton = () => {//handlePlusButtonと言う自作関数
		this.setState({ count: this.state.count - 1})
		
	}

	render(){
		console.log(this.state)
		return(
			<React.Fragment>
				<div>count: { this.state.count }</div>
				<button onClick={this.handlePlusButton}>+1</button>
				<button onClick={this.handleMinusButton}>-1</button>
			</React.Fragment>
		)
	}
}




export default App;
