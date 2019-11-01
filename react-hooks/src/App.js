import React, { Fragment } from 'react';
import './App.css';

import ClassForm from './Components/classForm'
import HookForm from './Components/hookForm';
import RefactoredHookForm from './Components/refactoredHookForm'
import AbstractHookForm from './Components/abstractHookForm'
import Counter from './Components/counter'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				<Counter/>
				<ClassForm/>
				<HookForm/> 
				<RefactoredHookForm/>
				<AbstractHookForm/>
			</div>
		</Fragment>
	);
}

export default App;
