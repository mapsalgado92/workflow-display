import React from 'react'
import './Branch.css'

function Branch(props) {
    //Receives a two branch properties (condition, targetId) and a handle function (handleBranch(id))
    return (
        <div className="branch-wrapper">
            <div className="branch-text"><p>{props.condition}</p></div>
            <button className="branch-button" onClick={()=>props.handleBranch(props.currentId, props.targetId)}><span>&#10148;</span></button>
        </div>
    )
}

export default Branch
