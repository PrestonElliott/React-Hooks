// function Todos() {
// 	const [todos, dispatch] = useReducer(todosReducer, []);
  
// 	function handleAddClick(text) {
// 	  dispatch({ type: 'add', text });
// 	}
// }

// function useReducer(reducer, initialState) {
// 	const [state, setState] = useState(initialState);
  
// 	function dispatch(action) {
// 	  const nextState = reducer(state, action);
// 	  setState(nextState);
// 	}
  
// 	return [state, dispatch];
// }