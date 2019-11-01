import React, { Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default class ClassSignUpForm extends React.Component {
    // CLASS COMPONENT - FORM USING STATE

    // SET INITIAL STATE
    state = {
        firstName: "First Name",
        lastName: "",
        email: ""
    }

    // CLASS COMPONENT - FORM FIELDS EVENT HANDLERS
    handleFirstNameUpdate = (e) => {
        this.setState({
            ...this.state, firstName: e.target.value 
        })
    }

    handleLastNameUpdate = (e) => {
        this.setState({
            ...this.state, lastName: e.target.value 
        })
    }

    handleEmailUpdate = (e) => {
        this.setState({
            ...this.state, email: e.target.value 
        })
    }

    // CLASS COMPONENT - FORM SUBMIT EVENT HANDLER
    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 
                    Accept: 'application/json', 
                    'Content-Type':'application/json' },
            body: JSON.stringify({
                user: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email
                }
            })
        })
    }

    // RENDERS CLASS COMPONENT
    render() {
        return (
            <Fragment>
                <Jumbotron id="class-form">
                    <Form 
                        className="sign-up-form"
                        onSubmit={this.handleSubmit}
                    >

                        <Form.Label className="form-header">
                            Class Component - Sign Up Form
                        </Form.Label>

                        <Form.Control 
                            className="form-fields"
                            name="first-name"
                            size="lg" 
                            type="text" 
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleFirstNameUpdate} 
                        />
        
                        <Form.Control 
                            className="form-fields"
                            name="last-name"
                            size="lg" 
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleLastNameUpdate} 
                        />    
        
                        <Form.Control 
                            className="form-fields"
                            name="email"
                            size="lg" 
                            type="text" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmailUpdate} 
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

}