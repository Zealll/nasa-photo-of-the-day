import React from 'react'

const Display = props => {
    if(!props.state) return <h1>Loading...</h1>
    return (
        <div>
            <header>
                <h1>
                    {props.state.title}
                </h1>
            </header>
            <div>
                {props.state.media_type === 'image' ? <img src={props.state.hdurl} alt={props.state.explanation}/> : <iframe width="420" height="345" src={props.state.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                <h4>{props.state.explanation}</h4>
                <p><strong>Date:</strong> {props.state.date}</p>
                <p><strong>CopyRight by:</strong> {props.state.copyright}</p>
            </div>
        </div>
    )
}

export default Display