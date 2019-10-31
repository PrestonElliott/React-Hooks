import React, { Fragment } from 'react';
import './App.css';
import SignUpForm from './Components/form';
import RefactoredSignUpForm from './Components/refactoredForm'
import ThirdForm from './Components/thirdForm'
import ClassForm from './Components/classForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				<ClassForm/>
				<SignUpForm/> 
				<RefactoredSignUpForm/>
				<ThirdForm/>
			</div>
		</Fragment>
	);
}

export default App;
