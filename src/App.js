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

const App = ( )=>{
	return <div> 
					<User name={"Taro"} age={10} />
					
			</div>
}

const User = ( props )=>{
return <div> Hi, I am {props.name} and {props.age}</div>
}



export default App;
