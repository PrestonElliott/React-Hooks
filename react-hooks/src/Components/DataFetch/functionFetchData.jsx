import React, { useState, useEffect } from "react";
import { Image, Button, Modal, Jumbotron } from "react-bootstrap"

export default function FunctionDailyPic() {

    const [nasaData, setData] = useState({ })
    const [showModal, setModal] = useState(false)

    async function fetchData() {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {fetchData()}, [])

    const handleShow = () => setModal(true)

    return (  
        <>
        <div id="jumbo-div">
            <Jumbotron>
                <h3 id="landing-page-title">{nasaData.title}</h3>
                <Button variant="info" onClick={handleShow}>
                    NASA - Daily Pic Details
                </Button>
            </Jumbotron>
        </div>

        <div id="modal-div">
            <Modal size="lg" show={showModal} onHide={() => setModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="daily-pic-title"> {nasaData.title} </Modal.Title>
                </Modal.Header>

                <Modal.Body id="daily-pic-info">
                    <Image src={nasaData.hdurl} fluid/>
                    <h5 id="daily-pic-sub-title">
                        {nasaData.copyright ? nasaData.copyright : "Unknown"} | {nasaData.date}
                    </h5>
                    <p><strong>Summary:</strong> {nasaData.explanation}</p>
                </Modal.Body>

                <Button variant="danger" onClick={() => setModal(false)}>Close</Button>
            </Modal>
        </div>
        </>
    )
}