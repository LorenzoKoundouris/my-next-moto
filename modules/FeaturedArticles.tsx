// libs
import styled from 'styled-components';
import { Component } from 'react';

class FeaturedArticles extends Component {
  render() {
    const { children } = this.props;
    return <StyledGrid>{children}</StyledGrid>;
  }
}

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  grid-template-columns: auto;
  overflow-x: scroll;
  width: 100%;

  & > * {
    min-width: 150px; /* scroll larger items on mobile*/
  }
`;

export default FeaturedArticles;
