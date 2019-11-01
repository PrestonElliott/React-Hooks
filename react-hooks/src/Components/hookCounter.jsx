import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {
	// COUNTER FUNCTION COMPONENT - USING REACT HOOKS 

	// SET INITIAL STATE
	const [count, setCount] = useState(0)
	

	// COUNT EVENT HANDLER
    function handleCounter () {
      setCount(count + 1)
	}

	// RENDERS COMPONENT
    return (
        <div id="counter">
            <h2 id="counter-header">
				You clicked the button {count} times.
			</h2>

			<Button 
				id="counter-button"
				onClick={handleCounter} 
			>
                Click Here
            </Button>
        </div>
    )
}


// ADD useEffect to React import

// ADD TO STATE
// useBrowserTabEffect(count)
	
// ADD EFFECT BELOW COUNT EVENT HANDLER
	// useEffect(() => {
	// 	document.title = `You clicked ${count} times.`
	// })


// STAYS AT BOTTOM FOR REFACTOR EXAMPLE
// REFACTORED INTO CUSTOM EFFECT HOOK
// function useBrowserTabEffect(count) {
// 	useEffect(() => {
// 		document.title = `You clicked ${count} times.`
// 	})
// }