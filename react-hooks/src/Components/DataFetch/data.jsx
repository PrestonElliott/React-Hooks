import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap"

export default function SearchResults() {

    const [nasaData, setData] = useState({ })

    async function fetchData() {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        res.json()
        .then(res => setData(res))
    }

    useEffect(() => {
        fetchData()
    }, [])

    
    return (  
        <div>
            <h2 id="daily-pic-title">{nasaData.title}</h2>
            <p id="daily-pic-explanation">{nasaData.explanation}</p>
            <Image id="jumbo-photo" src={nasaData.hdurl} />
        </div>
    )
}

