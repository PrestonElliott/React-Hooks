import React, { Fragment } from 'react';
import './App.css';
import SignUpForm from './Components/form';
import DrySignUpForm from './Components/dryForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				<SignUpForm/> 
				<DrySignUpForm/>
			</div>
		</Fragment>
	);
}

export default App;
