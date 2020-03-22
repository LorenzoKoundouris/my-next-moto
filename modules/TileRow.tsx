// libs
import styled from 'styled-components';
import { Component } from 'react';

interface IProps {
  layout?: Layout;
}

export enum Layout {
  TIPSTER_QUICK_LINKS = 'tipsterQuickLinks',
  FEATURED_TIPS = 'featuredTips',
}

class TileRow extends Component<IProps> {
  render() {
    const { children, layout } = this.props;

    switch (layout) {
      case Layout.TIPSTER_QUICK_LINKS:
        return <TipsterQuickLinks>{children}</TipsterQuickLinks>;
      case Layout.FEATURED_TIPS:
        return <FeaturedArticles>{children}</FeaturedArticles>;
      default:
        return <StyledGrid>{children}</StyledGrid>;
    }
  }
}

const StyledGrid = styled.div`
  ${(props) => props.theme.gridView}
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  overflow-x: scroll;
`;

const TipsterQuickLinks = styled(StyledGrid)`
  grid-auto-columns: 150px; /*auto created cols width*/
`;

const FeaturedArticles = styled(StyledGrid)`
  & > * {
    min-width: 150px; /* scroll larger items on mobile*/
  }
`;

export default TileRow;
