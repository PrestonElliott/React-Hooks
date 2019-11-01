import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {

	const [count, setCount] = useState(0)
	useBrowserTabEffect(count)

    function handleCounter () {
      setCount(count + 1)
	}
	
	// useEffect(() => {
	// 	document.title = `You clicked ${count} times.`
	// })

    return (
        <div>
            <h2>You clicked the button {count} times.</h2>
			<Button onClick={handleCounter} >
                Click Here
            </Button>
        </div>
    )

}


// REFACTORED INTO CUSTOM EFFECT HOOK
function useBrowserTabEffect(count) {
	useEffect(() => {
		document.title = `You clicked ${count} times.`
	})
}