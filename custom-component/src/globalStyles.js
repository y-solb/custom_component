import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family:'Arial',sans-serif ;
    }

    body{
        box-sizing:border-box;
    }

    button{
        border:none;
        outline: none;
        font-size: 14px;
        cursor: pointer;
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyle;
