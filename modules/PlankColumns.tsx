// libs
import styled from 'styled-components';
import { Component } from 'react';
import ContentBlock from '../components/common/content-block/ContentBlock';

class AllArticles extends Component {
  render() {
    const { children } = this.props;
    return (
      <ContentBlock>
        <StyledGrid>{children}</StyledGrid>
      </ContentBlock>
    );
  }
}

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: row;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default AllArticles;
