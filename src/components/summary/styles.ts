import styled from "styled-components"

export const Container = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div {
        background-color: var(--green);
        color: var(--txt-color-white);

        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;

            font-weight: 500;
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    div:not(:nth-last-child(1)) {
        background-color: var(--white);
        color: var(--txt-color);
    }
`
