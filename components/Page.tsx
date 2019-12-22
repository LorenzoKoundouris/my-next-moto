// libs
import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// components
import Header from './Header';

const theme = {
  primaryColour: '#fff',
  secondaryColour: '#f2f2f2',
  tertiaryColour: '#e6e6e6',
  backgroundColour: '#fff',
  fontColour: '#000',
  highlightColour: '#0062ff',
};

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledPage>
            <Header />
            {this.props.children}
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}

// global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana;
  }
`;

// styles
const StyledPage = styled.div`
  position: relative;
  background: ${props => props.theme.backgroundColour};
  color: ${props => props.theme.fontColour};
`;

export default Page;
