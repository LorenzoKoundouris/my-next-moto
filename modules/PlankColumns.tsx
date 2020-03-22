// libs
import styled from 'styled-components';
import { Component } from 'react';

class PlankColumns extends Component {
  render() {
    const { children } = this.props;
    return <StyledGrid>{children}</StyledGrid>;
  }
}

const StyledGrid = styled.div`
  ${(props) => props.theme.gridView}
  grid-auto-flow: row;
  overflow: hidden;

  @media screen and (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default PlankColumns;
