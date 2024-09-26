import CustomModal from "./lib/CustomModal";
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomModal message="oui" isVisible={true} />
    </React.StrictMode>
);