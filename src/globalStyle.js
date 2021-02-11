import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`

  body {
      color: ${(props) => (props.whiteColor ? 'white' : 'black')};
  }

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'font-family: sans-serif;'
}
`;
export const Button = styled.button`
  margin: 1rem;
  padding: 0.25em 1em;
  font-size: 2rem;
  border-radius: 2px;
  border: 2px solid black;
`;

export default GlobalStyle;
