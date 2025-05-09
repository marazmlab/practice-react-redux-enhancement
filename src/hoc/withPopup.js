import React, { useState } from 'react';

const withPopup = (WrappedComponent) => {
    return (props) => {
        const [isPopupVisible, setPopupVisible]  = useState(true);

        const closePopup = () => {
            setPopupVisible(false);
        };

        return (
            <>
                {isPopupVisible ? (
                    <div style={popupStyles}>
                        <button style={closeButtonStyles} onClick={closePopup}>x</button>
                        <WrappedComponent {...props} />
                    </div>
                ) : (
                    <div style={contentStyles}>
                        <WrappedComponent {...props}/>
                    </div>
                )}
            </>
        );
    } ;
};

const popupStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
};

const closeButtonStyles = {
    position: 'absolute',
    padding:'1px 5px',
    top: '10px',
    right: '10px',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '25%',
    cursor: 'pointer',
};

const contentStyles = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
};

export default withPopup;