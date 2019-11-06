import React, { useEffect, useReducer } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
    // useReducer REACT HOOK 
    // SET INITIAL STATE TO ZERO ON LINE 21
	const [count, dispatch] = useReducer((state, action) => {
        switch(action) {
            case "INCREASE": {
                return state + 1
            }
            case "DECREASE": {
                return state - 1
            }
            case "RESET": {
                return state = 0
            }
            default:
                return state
        }
    }, 0)

    // CALL CUSTOM HOOK AND PASS IN 'count'
    useBrowserTabEffect(count)
    
	// RENDERS COMPONENT - USE DISPATCH TO ACCESS useReducer
    return (
        <div className="counter">
            <h2 className="counter-header">
				Current Count: {count}
			</h2>

			<Button 
				className="counter-button"
				onClick={() => dispatch('INCREASE')} 
			>
                +
            </Button>

            <Button 
				className="counter-button"
				onClick={() => dispatch("DECREASE")} 
			>
                -
            </Button>

            <Button 
				className="counter-button"
				onClick={() => dispatch("RESET")} 
			>
                Reset To Zero
            </Button>
        </div>
    )
}

// CUSTOM EFFECT HOOK - useBrowserTabEffect
// EXPLAIN [count] - WHAT IT IS AND WHY TO USE IT
function useBrowserTabEffect(count) {
	useEffect(() => {
		document.title = `Current Count: ${count}`
	}, [count])
}