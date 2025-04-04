import { useState } from "react";
import { createPortal } from "react-dom";
import "./portals.css";

function Portals() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Other Content</h1>
            <button onClick={() => setShow(true)}>Show Message</button>
            <Alert show={show} onClose={() => setShow(false)}>
                A simple message to show.
                <br />
                Click it to close.
            </Alert>
        </div>
    );
}

const Alert = ({ children, onClose, show }) => {
    if (!show) return;

    return createPortal(
        <div className="alert" onClick={onClose}>
            {children}
        </div>,
        document.body
    );
};

export default Portals;