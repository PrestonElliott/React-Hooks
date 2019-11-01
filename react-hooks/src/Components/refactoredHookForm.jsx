import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function RefactoredSignUpForm() {
    // REFACTORED REACT HOOKS - FUNCTION COMPONENT

    // CREATE OBJECTS TO PASS AS ARGUMENTS INTO FUNCTION useFormUpdate 
    const firstName = useFormUpdate()
    const lastName = useFormUpdate()
    const email = useFormUpdate()

    // REFACTORED REACT HOOKS - FORM FIELDS EVENT HANDLER
    // CUSTOM REACT HOOK useFormUpdate - WORKS FOR ALL FORM FIELDS 
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

    // REFACTORED REACT HOOKS - FORM SUBMIT EVENT HANDLER
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

    // REFACTORED REACT EFFECT HOOK - UPDATES BROWSER TAB TEXT
    useEffect(() => {
        document.title = firstName.value + ' ' + lastName.value
    })

    // REFACTORED REACT HOOKS - RENDERS COMPONENT
    return (
        <Fragment>
                <Jumbotron id="hook-form-2">
                    <Form 
                        className="sign-up-form"
                        onSubmit={handleSubmit}
                    >

                        <Form.Label className="form-header">
                            Refactored React Hooks - Sign Up Form
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

