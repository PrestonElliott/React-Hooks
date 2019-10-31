import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function AbstractHookForm() {
    // ABSTRACT REACT HOOKS - FUNCTION COMPONENT

    // CREATE OBJECTS TO PASS AS ARGUMENTS INTO FUNCTION useFormUpdate 
    // CALL CUSTOM HOOK useBrowserTabEffect
    const firstName = useFormUpdate()
    const lastName = useFormUpdate()
    const email = useFormUpdate()
    useBrowserTabEffect(firstName.value + ' ' + lastName.value)

    // ABSTRACT REACT HOOKS - FORM SUBMIT EVENT HANDLER
    const handleSubmit = (e) => {
        console.log(firstName.value)
        e.preventDefault()
 
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 
                    Accept: 'application/json', 
                    'Content-Type':'application/json' },
            body: JSON.stringify({
                user: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value
                }
            })
        })
    }

    // ABSTRACT REACT HOOKS - RENDERS COMPONENT
    return (
        <Fragment>
                <Jumbotron id="hook-form-3">
                    <Form 
                        className="sign-up-form"
                        onSubmit={handleSubmit}
                    >

                        <Form.Label className="form-header">
                            More Abstract React Hooks - Sign Up Form
                        </Form.Label>

                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="First Name"
                            {...firstName}
                        />
        
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="Last Name"
                            {...lastName}
                        />    
        
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="Email"
                            {...email}
                        />
        
                        <Button
                            className="submit-button" 
                            variant="primary" 
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
            </Jumbotron>
        </Fragment>      
    )
}

// ABSTRACT REACT HOOKS - CAN MOVE FUNCTIONS TO BOTTOM OF FILE
function useFormUpdate(initialValue) {
    const [value, formValue] = useState(initialValue)

    function handleChange(e) {
        formValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

// ABSTRACT REACT EFFECT HOOK - UPDATES BROWSER TAB TEXT
function useBrowserTabEffect(name) {
    useEffect(() => {
        document.title = name
    })
}


// SHOW HOW TO REMOVE EFFECT AFTER ITS USED
// OPTIONAL RETURN STATEMENT IN USE EFFECT

