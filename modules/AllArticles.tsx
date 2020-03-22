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
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  overflow: hidden;
  width: 100%;
`;

export default AllArticles;
