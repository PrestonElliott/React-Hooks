import React from 'react'
import { Image } from 'react-bootstrap'

export default class ClassDailyPic extends React.Component {

    state = {
		nasaData: { }
	}

	async componentDidMount() { 
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        const data = await res.json()
        this.setState({ nasaData: data })
    }
    
    render() {
        return (
            <div>
                <h2 id="daily-pic-title">{this.state.nasaData.title}</h2>
                <Image id="jumbo-photo" src={this.state.nasaData.hdurl} />
                <h4 id="daily-pic-info">{this.state.nasaData.copyright ? this.state.nasaData.copyright : "Unknown"} | {this.state.nasaData.date}</h4>
            </div>
        ) 
    }  
}