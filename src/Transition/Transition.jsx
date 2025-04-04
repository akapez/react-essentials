// useTransition: is a React Hook that lets you render a part of the UI in the background.

import { useState, useTransition } from "react";
import { StyledButton } from "./styled-elements";
import Cover from "./cover";
import Reviews from "./reviews";
import Writer from "./writer";

function Transition() {
    const [section, setSection] = useState("Cover");
    const [isPending, startTransition] = useTransition();


    const sectionHandler = (sec) => {
        console.log("before");
        startTransition(() => {
            setSection(sec);
            console.log("inside");
        });
        console.log("after");
    };

    return (
        <>
            <StyledButton onClick={() => sectionHandler("Cover")}>
                Book Cover
            </StyledButton>
            <StyledButton onClick={() => sectionHandler("Reviews")}>
                Book Reviews
            </StyledButton>
            <StyledButton onClick={() => sectionHandler("Writer")}>
                Book Writer
            </StyledButton>
            {isPending && "Loading......"}
            {section === "Cover" ? (
                <Cover />
            ) : section === "Reviews" ? (
                <Reviews />
            ) : (
                <Writer />
            )}
        </>
    );
}

export default Transition;