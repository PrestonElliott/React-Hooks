import React, { Fragment } from 'react'
import { Form, Button, Jumbotron } from 'react-bootstrap'

export default class ClassForm extends React.Component {
    // CLASS COMPONENT - FORM USING STATE

    state = {
        firstName: "Initial Value",
        lastName: "",
        email: ""
    }

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

    render() {
        return (
            <Fragment>
                <Jumbotron id="class-form">
                    <Form 
                        className="sign-up-form"
                        onSubmit={this.handleSubmit}
                    >

                        <Form.Label className="form-header">
                            Class Component Sign Up Form
                        </Form.Label>

                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleFirstNameUpdate} 
                        />
        
                        <Form.Control 
                            className="form-fields"
                            size="lg" 
                            type="text" 
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleLastNameUpdate} 
                        />    
        
                        <Form.Control 
                            className="form-fields"
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