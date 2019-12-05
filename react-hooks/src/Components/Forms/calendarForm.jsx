import React, { useState } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function CalendarForm() {

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

    return (
        <>
        <Jumbotron id="calendar-form">
            <Form className="sign-up-form" onSubmit={handleSubmit}>

                <Form.Label className="form-header">
                    Sign Up Form 
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Jumbotron>
        </>      
    )
}

// ON SUBMIT - DISPLAY A MODAL WITH Thank you {name}! Your sign up was successful!
