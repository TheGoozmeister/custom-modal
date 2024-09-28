import React, { useState, useEffect } from "react";
import "./customModal.css"


function CustomModal({ message, isVisible = true, onClose }) {

    const [showModal, setShowModal] = useState(isVisible);

    useEffect(() => {
        setShowModal(isVisible);
    }, [isVisible]);

    const handleEscape = () => {
        setShowModal(false);
        if (onClose) {
            onClose();
        }
    };
    
    if (!showModal) {
        return null;
    }

    return (
        <div className="customModal">
            <div className="customModal__box">
                <div className="customModal__box__message">
                    {message}
                </div>
                <div className="customModal__box__escape" onClick={handleEscape}>
                    Ok
                </div>
            </div>
        </div>
    );
}


export default CustomModal;
