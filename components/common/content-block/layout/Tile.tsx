// libs
import styled from 'styled-components';

interface IProps {
  media: string;
  title: string;
  subtitle: string;
}

function Tile({ media, title, subtitle }: IProps) {
  return (
    <StyledTile>
      <Media src={media} alt='tile-media'></Media>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledTile>
  );
}

const StyledTile = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
`;

const Media = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;
const Title = styled.div``;
const Subtitle = styled.div``;

export default Tile;
