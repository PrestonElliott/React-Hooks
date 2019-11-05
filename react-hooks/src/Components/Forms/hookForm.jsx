import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function HookSignUpForm() {
    // FUNCTION COMPONENT WITH REACT HOOKS 

    // SET INITIAL STATE
    const [firstName, formFirstName] = useState("First Name ")
    const [lastName, formLastName] = useState()
    const [email, formEmail] = useState()
 
    // REACT HOOKS - FORM FIELDS EVENT HANDLERS
    function handleFirstNameUpdate(e) {
        formFirstName(e.target.value)
    }

    function handleLastNameUpdate(e) {
        formLastName(e.target.value)
    }

    function handleEmailUpdate(e) {
        formEmail(e.target.value)
    }

    // REACT HOOKS - FORM SUBMIT EVENT HANDLER
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(firstName)

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 
                    Accept: 'application/json', 
                    'Content-Type':'application/json' },
            body: JSON.stringify({
                user: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }
            })
        })
    }

    // REFACTORED REACT EFFECT HOOK - UPDATES BROWSER TAB TEXT
    useEffect(() => {
        document.title = firstName + ' ' + lastName
    })

    // REACT HOOKS - RENDERS COMPONENT
    return (
            <Fragment>
                <Jumbotron id="hook-form-1">
                    <Form 
                        className="sign-up-form"
                        onSubmit={handleSubmit}
                    >

                        <Form.Label className="form-header">
                            React Hooks - Sign Up Form
                        </Form.Label>

                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstNameUpdate} 
                        />
        
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleLastNameUpdate} 
                        />    
        
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailUpdate} 
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

