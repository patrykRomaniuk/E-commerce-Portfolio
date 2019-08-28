import React from 'react'
import '../css/Modal.css'

export default function Modal({ isModal,setModal }) {
    return (
        <div className="modal-wrapper"
         style={{ display: isModal ? 'flex' : 'none' }}>
             <div className="modal">
                 <header className="header-modal">
                     <span>Basket</span>
                     <i className="fas fa-times" onClick={() => setModal(!isModal)}></i>
                 </header>
                 <div className="section-modal">
                     Section modal
                     <div className="modal-btn-wrapper">
                        <a className="modal-btn">
                            <span>Buy Now</span>
                        </a>
                     </div>
                 </div>
             </div>
        </div>
    )
}
