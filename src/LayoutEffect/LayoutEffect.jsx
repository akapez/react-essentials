//useLayoutEffect: is a version of useEffect that fires before the browser repaints the screen.

import { useLayoutEffect } from "react";
import { useState, useRef, useEffect } from "react";
import "./tooltip.css";

function LayoutEffect() {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        if (buttonRef.current === null || !show) return setTop(0);
        const { bottom } = buttonRef.current.getBoundingClientRect();
        setTop(bottom + 30);
    }, [show]);

    const now = performance.now();
    while (now > performance.now() - 100) {
        //fire
    }


    return (
        <>
            <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
                Show
            </button>
            {show && (
                <div className="tooltip" style={{
                    top: `${top}px`
                }}>
                    Some text...
                </div>
            )}
        </>
    );
}

export default LayoutEffect;