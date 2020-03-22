// libs
import React from 'react';
import styled from 'styled-components';

interface IProps {
  styles?: React.CSSProperties;
}

class Row extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { children, styles } = this.props;
    return <StyledRow style={styles}>{children}</StyledRow>;
  }
}

// styles
const StyledRow = styled.section`
  display: flex;
  margin: 4px;

  @media (min-width: 480px) and (max-width: 719px) {
    margin: 8px;
  }

  @media (min-width: 720px) {
    margin: 16px;
  }
`;

export default Row;
