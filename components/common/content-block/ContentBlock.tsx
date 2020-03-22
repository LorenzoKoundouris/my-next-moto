// libs
import styled from 'styled-components';
import { Component } from 'react';

interface IProps {
  styles?: React.CSSProperties;
}

class ContentBlock extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { children, styles } = this.props;
    return <Content style={styles}>{children}</Content>;
  }
}

const Content = styled.div`
  background-color: ${props => props.theme.primaryColour};
  border: 1px solid ${props => props.theme.secondaryColour};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

export default ContentBlock;
