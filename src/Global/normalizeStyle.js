import { createGlobalStyle } from "styled-components";

const NormalizeStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
*,*::before,*::after{
    box-sizing: box-border;
    outline: none;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
}

`;

export default NormalizeStyle;
