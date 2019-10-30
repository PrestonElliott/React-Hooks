import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function SignUpForm() {

    const [name, formName] = useState("First Name ")
    const [lastName, formLastName] = useState("Last Name")
    const [email, formEmail] = useState()
    const [submit, formSubmit] = useState()

    
    // MAKE CODE DRY-(DON'T REPEAT YOURSELF) 
    // REFACTOR EVENT HANDLERS TO WORK FOR ALL FORM FIELDS 
    function handleNameUpdate(e) {
        formName(e.target.value)
    }

    function handleLastNameUpdate(e) {
        formLastName(e.target.value)
    }

    function handleEmailUpdate(e) {
        formEmail(e.target.value)
    }

    function handleSubmit(e) {
        alert("Thank You!")
        formSubmit(e.target.value)
    }

    // USE EFFECT HOOK 
    useEffect(() => {
        document.title = name + ' ' + lastName
    })

    return (
            <Fragment>
                <Jumbotron>
                    <Form id="sign-up-form">
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="First Name"
                            value={name}
                            onChange={handleNameUpdate} 
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
                            value={submit}
                            onSubmit={handleSubmit}
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

