import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const portalElement = document.getElementById("overlays")

const ModalOverlay = (props) => {
    return(
        <>
            <div className="modal">
                <div>{props.children}</div>
            </div>   
        </>
    )
}

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </>
  )
}

export default Modal;