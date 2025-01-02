import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #f9f9f9; /* Base background color */
  background-image: 
    linear-gradient(45deg, #eaeaea 25%, transparent 25%, transparent 75%, #eaeaea 75%, #eaeaea),
    linear-gradient(45deg, transparent 25%, #eaeaea 25%, #eaeaea 75%, transparent 75%, transparent);
  background-size: 80px 80px; /* Adjust the size of diamonds */
  background-position: 0 0, 20px 20px; /* Offset the second layer */
  margin: 0;
  font-family: Arial, sans-serif;
}
`;

export default GlobalStyle;
