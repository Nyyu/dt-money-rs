import { darken, transparentize } from "polished"
import styled from "styled-components"

export const Container = styled.form`
    h2 {
        color: var(--txt-color-white-shade);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        height: 4rem;
        width: 100%;
        padding: 0 1.5rem;

        border: 1px solid var(--input-border);
        background-color: var(--input-bg);

        border-radius: 0.25rem;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--txt-color-body);
        }

        & + input {
            margin-top: 0.85rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        height: 4rem;

        color: var(--txt-color-white);
        background-color: var(--green);

        border: none;
        border-radius: 0.25rem;

        font-weight: 600;
        font-size: 1rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TypeOfTransactionButtonGroup = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    options: {
        isActive: boolean
        type: "withdraw" | "deposit"
    }
}

const color = {
    withdraw: "#E52E4D",
    deposit: "#33cc99",
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4rem;

    background-color: ${(props) =>
        props.options.isActive
            ? transparentize(0.9, color[props.options.type])
            : "transparent"};

    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--txt-color-white-shade);
    }
`
