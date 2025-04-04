import { useState } from "react";
import Counter from "./Counter";

function Key() {
    const [changeShirts, setChangeShirts] = useState(false);

    return (
        <div>
            {changeShirts ? (
                <>
                    <span>Shirt counts: </span> <Counter key="shirt" />
                </>
            ) : (
                <>
                    <span>Shoes counts: </span> <Counter key="shoe" />
                </>
            )}
            <br />
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </div>
    );
}
export default Key;