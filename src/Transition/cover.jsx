import { CoverContainer, Emoji } from "./styled-elements";

function Cover() {
    return (
        <CoverContainer>
            <Emoji role="img" aria-label="Book cover">
                📚
            </Emoji>
        </CoverContainer>
    );
}

export default Cover;