import React, { useState, useEffect, Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default function SignUpForm() {
    const firstName = useFormUpdate()
    const lastName = useFormUpdate()
    const email = useFormUpdate()
    // const [submit, formSubmit] = useState()

    // REFACTORED ABOVE
    // const [name, formName] = useState()
    // const [lastName, formLastName] = useState()

    // REFACTORED TO WORK FOR ALL FIELDS 
    // MAKES YOUR CODE DRY-(DON'T REPEAT YOURSELF) 
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

    const handleSubmit = (e) => {
        console.log(firstName.value)
        e.preventDefault()

        // EXAMPLE FORM SUBMISSION  
        fetch('http://localhost:3000/users',{
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

    // USE EFFECT HOOK 
    useEffect(() => {
        document.title = firstName.value + ' ' + lastName.value
    })

    return (
        <Fragment>
                <Jumbotron>
                    <Form 
                        id="sign-up-form" 
                        // value={submit}
                        onSubmit={handleSubmit}
                    >
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
                            // {...submit}
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

