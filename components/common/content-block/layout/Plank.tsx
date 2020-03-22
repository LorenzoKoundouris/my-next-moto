// libs
import styled from 'styled-components';

interface IProps {
  media: string;
  title: string;
  subtitle: string;
}

function Plank({ media, title, subtitle }: IProps) {
  return (
    <StyledPlank>
      <Media src={media} alt='tile-media'></Media>
      <Metadata>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Metadata>
    </StyledPlank>
  );
}

const StyledPlank = styled.div`
  ${(props) => props.theme.gridView}
  grid-template-columns: 100px auto;
`;

const Media = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Metadata = styled.div`
  ${(props) => props.theme.gridView}
  grid-template-rows: repeat(2, 1fr);
`;

const Title = styled.div``;
const Subtitle = styled.div``;

export default Plank;
