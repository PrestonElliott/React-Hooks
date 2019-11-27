import React, { useState, useEffect } from "react";
import { Image, Button, Modal } from "react-bootstrap"

export default function FunctionDailyPic() {

    const [nasaData, setData] = useState({ })
    // const [show, setShow] = useState(false)
    const [lgShow, setLgShow] = useState(false)

    // const handleClose = () => setShow(false)
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
            <Button variant="info" onClick={handleShow}>
                NASA - Daily Pic Details
            </Button>

            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="daily-pic-title"> {nasaData.title} </Modal.Title>
                </Modal.Header>

                <Modal.Body id="daily-pic-info">
                    <Image src={nasaData.hdurl} fluid/>
                    {nasaData.copyright ? nasaData.copyright : "Unknown"} | {nasaData.date}
                </Modal.Body>

                <Modal.Footer>
                    {nasaData.explanation}
                </Modal.Footer>

                <Button variant="danger" onClick={() => setLgShow(false)}>Close</Button>
            </Modal>
        </div>
    )
}
