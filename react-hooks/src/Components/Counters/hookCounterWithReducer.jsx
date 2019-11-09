import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
    const initialState = { count: 0 }

    // ROUTES ACTIONS TO UPDATE STATE
    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREASE": {
                return { count: state.count + 1 }
            }
            case "DECREASE": {
                return { count: state.count - 1 }
            }
            case "RESET": {
                return { count: state.count = 0 }
            }
            default:
                return state.count
        }
    } 

    // state UPDATES VIA dispatch 
    // useReducer TAKES IN THE reducer FUNCTION AND initialState 
    const [state, dispatch] = useReducer(reducer, initialState)
    
    // RENDERS COUNT COMPONENT
    return (
        <div className="counter">
            <h2 className="counter-header">
				Count: {state.count}
			</h2>

			<Button 
				className="counter-button"
                variant="success"
				onClick={() => dispatch({ type: 'INCREASE' })} 
			>
                +
            </Button>

            <Button 
				className="counter-button"
                variant="danger"
				onClick={() => dispatch({ type: "DECREASE" })} 
			>
                -
            </Button>

            <Button 
				className="counter-button"
                variant="info"
				onClick={() => dispatch({ type: "RESET" })} 
			>
                Reset To Zero
            </Button>
        </div>
    )
}