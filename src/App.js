import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("I am clicked!")}} />
//       </React.Fragment>
//     );
//   }
  
// }


// reactにはバーチャルドムが存在し、どのドムが変更されたか、管理していて、変更点だけを実際のドムに反映している。

const App = ( )=>{
	const profiles = [
		{name: "Taro", age: 10},
		{name: "Hanako", age: 5},
		{name: "NoName"}
	]
	return <div> 
				{
					profiles.map((profile, index) => {
						return <User name={profile.name} age={profile.age} key={index} />
					})
				}
				
				<User name={"Taro"} age={10} />
				<User name={"Hanako"} age={5} />
					
			</div>
}

const User = ( props )=>{
return <div> Hi, I am {props.name} and {props.age}years old!</div>
}

// defaultProps はpropsが空の時に入る値。

// 構文
// コンポーネント.defaultProps = {
// 	name: 値,
// 	name: 値,
// }
User.defaultProps = {
	age: 1
}



export default App;
