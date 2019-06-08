import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

body{
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    margin: 32px;
    font-size: 22px;
    color: #2b2c2d;
    background-color: #edeef0;
}
a {
    text-decoration: none;
}
#root {
    height: inherit;
    width: inherit;
}
`;
