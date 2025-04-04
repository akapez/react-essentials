import { useCallback } from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";


function CallbackRef() {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef();

    const inputHandler = useCallback((input) => {
        inputRef.current = input;
        if (input === null) return;
        input.focus();
    }, []);

    return (
        <>
            <button onClick={() => setShowInput((s) => !s)}>Switch</button>
            {showInput && <input type="text" ref={inputHandler} />}
        </>
    );
}

export default CallbackRef;