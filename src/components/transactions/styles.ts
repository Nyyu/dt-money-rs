import styled from "styled-components"

export const Container = styled.div`
    max-width: var(--container-width);
    margin: 3.5rem auto 2rem;
`

export const Content = styled.div`
    tr:first-child {
        margin-bottom: 1.5rem;
    }
    tr {
        display: grid;
        grid-template-columns: 2fr repeat(3, 1fr);
        place-items: start;

        th {
            color: var(--txt-color-white-shade);
            font-weight: 500;

            &:first-child {
                margin-left: 1.5rem;
            }
        }
        & + tr {
            background-color: #fff;

            padding: 1.5rem;
            border-radius: 6px;
            box-shadow: 1.9px 1.8px 5.3px rgba(0, 0, 0, 0.008),
                6.5px 6px 17.9px rgba(0, 0, 0, 0.011),
                29px 27px 80px rgba(0, 0, 0, 0.03);

            td:not(:first-child) {
                color: var(--txt-color-white-shade);

                /* Price colors */
                &[about="income"] {
                    color: var(--green);
                }
                &[about="outcome"] {
                    color: var(--red);
                }
            }
        }

        // Cascade effect
        margin-bottom: 0.45rem;
    }
`
