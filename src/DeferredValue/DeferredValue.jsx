//useDeferredValue: is a React Hook that lets you defer updating a part of the UI.

import { useState, useDeferredValue } from "react";
import { HeavyComponent } from "./HeavyCOmponent";

function DeferredValue() {
    const [keyword, setKeyword] = useState("");

    const deferredKeyword = useDeferredValue(keyword);

    console.log("keyword ", keyword);
    console.log("Deferred keyword ", deferredKeyword);

    return (
        <>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <HeavyComponent keyword={deferredKeyword} />
        </>
    );
}
export default DeferredValue;