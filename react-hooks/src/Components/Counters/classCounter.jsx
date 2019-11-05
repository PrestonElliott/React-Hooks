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

    // CREATE EFFECT - UPDATES BROWSER TAB TEXT
    componentDidMount() {
        document.title = `Count: ${this.state.count}`
    }

    componentDidUpdate() {
        document.title = `Count: ${this.state.count}`
    }

    // RENDERS COMPONENT
    render() {
        return(
            <div className="counter">
                <h2 className="counter-header">
                    You clicked the button {this.state.count} times.
                </h2>

                <Button 
                    className="counter-button"
                    onClick={this.handleCounter} 
                >
                    Click Here
                </Button>
            </div>
        )
    }
}