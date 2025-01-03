import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", serif;
    }

    body {
        background-color: #000000;
    }
`;

export default GlobalStyles;