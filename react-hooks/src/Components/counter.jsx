import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Counter() {

	const [count, setCount] = useState(0)

    function handleCounter () {
      setCount(count + 1)
    }

    return (
        <div>
            <h2>You clicked the button {count} times.</h2>
			<Button onClick={handleCounter} >
                Click Here
            </Button>
        </div>
    )

}