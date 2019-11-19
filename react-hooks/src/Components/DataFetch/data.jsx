import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap"

export default function SearchResults() {

    const [hasError, setErrors] = useState(false)
    const [nasaData, setData] = useState({ })

    async function fetchData() {
        // const key = process.env.REACT_APP_NASA_API_KEY

        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        res.json()
        .then(res => setData(res))
        .catch(error => setErrors(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (   
        <div>
            {/* <span> {JSON.stringify(nasaData)} </span>
            <span> Has error: {JSON.stringify(hasError)} </span> */}
            <h2 id="daily-pic-title">{nasaData.title}</h2>
            <p id="daily-pic-explanation">{nasaData.explanation}</p>
            <Image id="jumbo-photo" src={nasaData.hdurl} />
        </div>
    )
}

