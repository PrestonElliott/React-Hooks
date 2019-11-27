import React, { useState, useEffect } from "react";
import { Image, Button, Modal } from "react-bootstrap"

export default function FunctionDailyPic() {
    const [nasaData, setData] = useState({ })
    const [lgShow, setLgShow] = useState(false)
    const handleShow = () => setLgShow(true)

    async function fetchData() {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (  
        <div id="daily-pic-div">
            <h3>{nasaData.title}</h3>
            <Button variant="info" onClick={handleShow}>
                NASA - Daily Pic Details
            </Button>

            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
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

                <Button variant="danger" onClick={() => setLgShow(false)}>Close</Button>
            </Modal>
        </div>
    )
}
