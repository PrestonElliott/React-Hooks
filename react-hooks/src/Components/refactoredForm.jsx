import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function RefactoredSignUpForm() {
    // CREATE OBJECTS TO PASS AS ARGUMENTS INTO FUNCTION useFormUpdate 
    const firstName = useFormUpdate()
    const lastName = useFormUpdate()
    const email = useFormUpdate()

    // REFACTORED TO WORK FOR ALL FORM FIELDS 
    // CODE IS DRY-(DON'T REPEAT YOURSELF) 

    // CUSTOM REACT HOOK useFormUpdate 
    // CUSTOM HOOK'S NAMING CONVENTION BEGINS WITH 'use'
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

    // EXAMPLE FORM SUBMISSION 
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

    // USE EFFECT HOOK TO UPDATE BROWSER TAB TITLE
    useEffect(() => {
        document.title = firstName.value + ' ' + lastName.value
    })

    // DISPLAYS FORM
    return (
        <Fragment>
                <Jumbotron>
                    <Form 
                        id="sign-up-form" 
                        onSubmit={handleSubmit}
                    >

                        <Form.Label>
                            Refactored Sign Up Form
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

// SHOW HOW TO REFACTOR FUNCTIONS DOWN HERE



// SHOW HOW TO REMOVE EFFECT AFTER ITS USED



// OPTIONAL RETURN STATEMENT IN USE EFFECT

