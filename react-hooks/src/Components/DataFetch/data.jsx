import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap"

export default function DailyPic() {

    const [nasaData, setData] = useState({ })

    async function fetchData() {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (  
        <div>
            <h2 id="daily-pic-title">{nasaData.title}</h2>
            <Image id="jumbo-photo" src={nasaData.hdurl} />
            <h4 id="daily-pic-info">{nasaData.copyright} | {nasaData.date}</h4>
        </div>
    )
}