import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
	// COUNTER FUNCTION COMPONENT - USING REACT HOOKS 

	// SET INITIAL STATE
	const [count, setCount] = useState(0)
	useBrowserTabEffect(count)
	
	// COUNT EVENT HANDLER
    function handleCounter () {
      setCount(count + 1)
	}

	// RENDERS COMPONENT
    return (
        <div className="counter">
            <h2 className="counter-header">
				You clicked the button {count} times.
			</h2>

			<Button 
				className="counter-button"
				onClick={handleCounter} 
			>
                Click Here
            </Button>
        </div>
    )
}

// REFACTORED INTO CUSTOM EFFECT HOOK - useBrowserTabEffect
function useBrowserTabEffect(count) {
	useEffect(() => {
		document.title = `You clicked ${count} times.`
	}, [count])
}