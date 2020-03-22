// libs
import styled from 'styled-components';
import ContentBlock from '../components/common/content-block/ContentBlock';
import Row from '../components/common/Row';
import Tile from '../components/common/content-block/layout/Tile';
import TipsterRow from '../modules/TipsterQuickLinks';
import FeaturedArticles from '../modules/FeaturedArticles';
import Plank from '../components/common/content-block/layout/Plank';
import AllArticles from '../modules/AllArticles';

function Index() {
  return (
    <>
      {/* example of setting styles to Row which may be overridden by children*/}
      <Row styles={{ textTransform: 'uppercase' }}>
        <LowercaseTitle>Page title</LowercaseTitle>
      </Row>
      Featured Articles as Tiles
      <Row>
        <FeaturedArticles>
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
        </FeaturedArticles>
      </Row>
      Normal Articles as Planks
      <Row>
        <AllArticles>
          <Plank
            media='http://placecorgi.com/300/300'
            title='Title'
            subtitle='Subtitle'
          />

          <Plank
            media='http://placecorgi.com/300/300'
            title='Title'
            subtitle='Subtitle'
          />

          <Plank
            media='http://placecorgi.com/300/300'
            title='Title'
            subtitle='Subtitle'
          />

          <Plank
            media='http://placecorgi.com/300/300'
            title='Title'
            subtitle='Subtitle'
          />
        </AllArticles>
      </Row>
      Tipster Quick Links
      <Row>
        <TipsterRow>
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
          <ContentBlock></ContentBlock>
        </TipsterRow>
      </Row>
    </>
  );
}

// styles
const LowercaseTitle = styled.h1`
  text-transform: lowercase;
`;

export default Index;
