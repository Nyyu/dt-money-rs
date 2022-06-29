import { createGlobalStyle } from "styled-components"
import { darken } from "polished"

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #f0f2f5;
        --card-color: ${darken(0.025, "#f0f2f5")};
        --bg-color-dark: #18181B;

        --txt-color: #18181B;
        --txt-color-white: #fff;
        --txt-color-white-shade: ${darken(0.5, "#fff")};
        --txt-color-body: ${darken(0.45, "#fff")};

        --input-bg: #e7e9ee;
        --input-border: #d7d7d7;

        --green: #33cc99;
        --red: #E52E4D;
        --blue: #5429CC;
        --white: #fff;

        --blue-light: #6933ff;

        --container-width: 1120px;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--bg-color);
        color: var(--txt-color);    
        font-family: 'Roboto', sans-serif;
    }

    .react-modal {
        &-overlay{
            background-color: rgba(0, 0, 0, 0.5);

            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        &-content {
            background-color: var(--bg-color);
            width: 100%;
            max-width: 576px;

            padding: 3rem;
            border-radius: 0.3rem;

            position: relative;
        }

        &-close-btn {
            position: absolute;
            top: 1.5rem; 
            right: 1.5rem;

            cursor: pointer;
            transition: color .2s;

            &:hover {
                color: var(--txt-color-white-shade);
            } 
        }
    }

    button {
        cursor: pointer;
    }
    .btn-inv {
        border: 0;
        background-color: transparent
    }
`
