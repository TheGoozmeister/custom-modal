const { useState, useEffect } = require("react");

function CustomModal({message, isVisible=true}) {

    const [showModal, setShowModal] = useState(isVisible);

    useEffect(() => {
        setShowModal(isVisible);
    }, [isVisible]);

    const handleEscape = () => {
        setShowModal(false);
    }
    
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
                    X
                </div>
            </div>
        </div>
    )
}


export default CustomModal;