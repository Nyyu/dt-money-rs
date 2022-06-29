import { lighten } from "polished"
import styled from "styled-components"

const containerHeight = 200

export const Container = styled.div`
    background-color: var(--blue);
    color: var(--txt-color-white);
    padding-top: 2rem;
`
export const Content = styled.div`
    max-width: var(--container-width);
    width: 100%;
    height: ${containerHeight}px;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    & button[type="button"] {
        width: 11.5rem;
        max-height: 3rem;
        padding: 0.75rem;

        border: none;
        border-radius: 6px;

        background-color: var(--blue-light);
        color: var(--txt-color-white);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85rem;

        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: ${lighten(0.05, "#6933ff")};
        }
    }
`
