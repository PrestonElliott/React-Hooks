import React, { useEffect, useReducer } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
    
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
	useBrowserTabEffect(count)
	
    return (
        <div className="counter">
            <h2 className="counter-header">
				You clicked the button {count} times.
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

// REFACTORED INTO CUSTOM EFFECT HOOK - useBrowserTabEffect
function useBrowserTabEffect(count) {
	useEffect(() => {
		document.title = `Count: ${count}`
	}, [count])
}