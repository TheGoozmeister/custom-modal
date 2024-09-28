import CustomModal from "./lib/CustomModal";
import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/lib/customModal.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CustomModal message="This is an example" isVisible={true} />
    </React.StrictMode>
);