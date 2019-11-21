import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana;
  }
`;

const StyledPage = styled.div`
  background: ${props => props.theme.backgroundColour};
  color: ${props => props.theme.fontColour};
`;

export default Page;
