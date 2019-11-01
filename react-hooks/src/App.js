import React, { Fragment } from 'react';
import './App.css';

// import ClassForm from './Components/classForm'
// import HookForm from './Components/hookForm';
// import RefactoredHookForm from './Components/refactoredHookForm'
// import AbstractHookForm from './Components/abstractHookForm'

import ClassCounter from './Components/classCounter'
import HookCounter from './Components/hookCounter'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				<ClassCounter />
				<HookCounter/>
				{/* <ClassForm/>
				<HookForm/> 
				<RefactoredHookForm/>
				<AbstractHookForm/> */}
			</div>
		</Fragment>
	);
}

export default App;
