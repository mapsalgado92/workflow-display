import React from 'react'
import './Step.css'

export default function Step(props) {
    return (
        <div className ="step-wrapper">
            <div className="step-title"><p>{props.title}</p></div>
            <div className="step-detail"><p>{props.detail}</p></div>
        </div>
    )
}
