import { createGlobalStyle } from "styled-components";

const ResetGlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: sans-serif;
 }

 #root {
     height: 100%;
 }

 html, body{
    transition:  0.5s all;
    height: 100%;
 }

 img {
    max-width: 100%;
    display: inline-block;
    margin: 0;
  }
`;

export default ResetGlobalStyle;
