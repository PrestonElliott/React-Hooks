import React, { Fragment } from 'react';
import './App.css';
import SignUpForm from './Components/form';
import RefactoredSignUpForm from './Components/refactoredForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				<SignUpForm/> 
				<RefactoredSignUpForm/>
			</div>
		</Fragment>
	);
}

export default App;
