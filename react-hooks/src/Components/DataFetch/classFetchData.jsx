import React from 'react'
import { Image, Button, Modal } from 'react-bootstrap'

export default class ClassDailyPic extends React.Component {

    state = {
        nasaData: { },
        showModal: false
    }
    
    handleShow = () => this.setState({showModal: true})

    handleHide = () => this.setState({showModal: false})

	async componentDidMount() { 
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        const data = await res.json()
        this.setState({ nasaData: data })
    }
    
    render() {
        return (
            <div id="daily-pic-div">
                <h3>{this.state.nasaData.title}</h3>
                <Button variant="info" onClick={this.handleShow}>
                    NASA - Daily Pic Details
                </Button>

                <Modal size="lg" show={this.state.showModal}  onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title id="daily-pic-title"> {this.state.nasaData.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body id="daily-pic-info">
                        <Image src={this.state.nasaData.hdurl} fluid/>
                        <h5 id="daily-pic-sub-title">
                            {this.state.nasaData.copyright ? this.state.nasaData.copyright : "Unknown "}
                             | {this.state.nasaData.date}
                        </h5>
                        <p><strong>Summary:</strong> {this.state.nasaData.explanation}</p>
                    </Modal.Body>

                    <Button variant="danger" onClick={this.handleHide}>Close</Button>
                </Modal>
            </div>
        ) 
    }  
}