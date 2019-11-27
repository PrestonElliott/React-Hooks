import React, { Fragment } from 'react';
import './App.css';

// import ClassForm from './Components/Forms/classForm'
// import HookForm from './Components/Forms/hookForm';
// import RefactoredHookForm from './Components/Forms/refactoredHookForm'
// import AbstractHookForm from './Components/Forms/abstractHookForm'

// import ClassCounter from './Components/Counters/classCounter'
// import HookCounter from './Components/Counters/hookCounter'
// import HookReducerCounter from './Components/Counters/hookCounterWithReducer'

// import ToDoHook from './Components/ToDos/toDoHooks'

import FunctionDailyPic from './Components/DataFetch/functionFetchData'
// import ClassDailyPic from './Components/DataFetch/classFetchData'

// import DetailsModal from './Components/DataFetch/modal'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Fragment>
			<div> 
				{/* <DetailsModal /> */}
				<FunctionDailyPic />
				{/* <ClassDailyPic /> */}
				{/* <ToDoHook/> */}
				{/* <HookReducerCounter/> */}
				{/* <ClassCounter/>
				<HookCounter/> */}
				{/* <ClassForm/>
				<HookForm/> 
				<RefactoredHookForm/>
				<AbstractHookForm/> */}
			</div>
		</Fragment>
	);
}

export default App;
