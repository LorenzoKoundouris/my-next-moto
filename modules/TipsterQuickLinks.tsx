// libs
import styled from 'styled-components';
import { Component } from 'react';

class TipsterRow extends Component {
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
  grid-auto-columns: 150px; /*auto created cols width*/
  overflow-x: scroll;
  width: 100%;
`;

export default TipsterRow;
