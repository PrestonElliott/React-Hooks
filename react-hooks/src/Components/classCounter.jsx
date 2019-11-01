import React from 'react'
import { Button } from 'react-bootstrap'

export default class ClassCounter extends React.Component {
    // COUNTER CLASS COMPONENT

    // SET INITIAL STATE
    state = {
        count: 0
    }

    // COUNT EVENT HANDLER 
    handleCounter = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }

    // RENDERS COMPONENT
    render() {
        return(
            <div id="counter">
                <h2 id="counter-header">
                    You clicked the button {this.state.count} times.
                </h2>

                <Button 
                    id="counter-button"
                    onClick={this.handleCounter} 
                >
                    Click Here
                </Button>
            </div>
        )
    }
}