// libs
import styled from 'styled-components';
import ContentBlock from '../components/common/content-block/ContentBlock';
import Row from '../components/common/Row';
import Tile from '../components/common/content-block/layout/Tile';
import TileRow, { Layout } from '../modules/TileRow';
import Plank from '../components/common/content-block/layout/Plank';
import PlankColumns from '../modules/PlankColumns';

function Index() {
  return (
    <IndexPage>
      {/* example of setting styles to Row which may be overridden by children*/}
      <Row styles={{ textTransform: 'uppercase' }}>
        <LowercaseTitle>Page title</LowercaseTitle>
      </Row>
      Featured Articles as Tiles
      <Row>
        <TileRow layout={Layout.FEATURED_TIPS}>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
        </TileRow>
      </Row>
      Normal Articles as Planks
      <Row>
        <PlankColumns>
          <ContentBlock>
            <Plank
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Plank
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Plank
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Plank
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
        </PlankColumns>
      </Row>
      Tipster Quick Links
      <Row>
        <TileRow layout={Layout.TIPSTER_QUICK_LINKS}>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
          <ContentBlock>
            <Tile
              media='http://placecorgi.com/300/300'
              title='Title'
              subtitle='Subtitle'
            />
          </ContentBlock>
        </TileRow>
      </Row>
    </IndexPage>
  );
}

const IndexPage = styled.div``;

// styles
const LowercaseTitle = styled.h1`
  text-transform: lowercase;
`;

export default Index;
